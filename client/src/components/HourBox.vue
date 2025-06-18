<template>
  <div class="hours">
    <div
      v-for="hour in day"
      :key="hour"
      :id="hour"
      class="hour"
      :class="[
        idx === 0 ? 'first-col' : '',
        availability[hour].includes(hostID)
          ? 'host-lock'
          : availability[hour].includes(userID)
              ? 'selected'
              : '',
        availability[hour].length >= 3 ? 'full' : '',
        !loggedIn ? 'disabled' : ''
      ]"
      :style="styleBinding(availability[hour])"
      @mousedown="clickHandler"
      @mousemove.prevent="dragHandler"
      @mouseenter="hoverIn"
      @mouseleave="hoverOut"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ActionTypes } from "@/store/actions";
import { MutationType } from "@/store/mutations";

export default {
  props: { day: Array, idx: Number },
  setup() {
    const store  = useStore();
    const route  = useRoute();

    const userID   = computed(() => store.state.userID);
    const hostID   = computed(() => store.getters.getHostID);
    const loggedIn = computed(() => !!store.state.userID);

    let dragAction: "ADD" | "REMOVE" = "ADD";

    /* 공통 처리 --------------------------------- */
    const update = (act: "ADD" | "REMOVE", el: HTMLElement) => {
      const unixtime = el.id;
      const slot     = store.getters.getAvailability[unixtime];

      // Host 칸 접근 차단
      if (slot.includes(hostID.value) && userID.value !== hostID.value) {
        alert("해당 시간대는 예약할 수 없습니다!");
        return;
      }
      // 정원 3명 초과
      if (act === "ADD" && slot.length >= 3 && !slot.includes(hostID.value)) {
        alert("이미 예약이 꽉 찼습니다!");
        return;
      }

      if (act === "ADD") el.classList.add("selected");
      else               el.classList.remove("selected");

      const type =
        act === "ADD" ? ActionTypes.addEvent : ActionTypes.removeEvent;
      store.dispatch(type, { unixtime, eventID: route.params.id });
      store.dispatch(ActionTypes.updateDatabase);
    };

    const clickHandler = (e: MouseEvent) => {
      if (!loggedIn.value) return;
      const el    = e.target as HTMLElement;
      const slot  = store.getters.getAvailability[el.id]; 
      const have  = slot.includes(userID.value);           

      dragAction = have ? "REMOVE" : "ADD";          
      update(dragAction, el);
    };
    const dragHandler = (e: MouseEvent) => {
      if (loggedIn.value && e.buttons === 1)
        update(dragAction, e.target as HTMLElement);
    };

    const styleBinding = (arr: string[]) => ({
      backgroundColor: `hsl(157,59%,${100 - arr.length * 10}%)`,
    });
    const hoverIn  = (e: MouseEvent) =>
      store.commit(MutationType.updateHover, (e.target as HTMLElement).id);
    const hoverOut = () =>
      store.commit(MutationType.updateHover, "MouseOut");
    return {
      availability: computed(() => store.getters.getAvailability),
      userID,
      hostID,
      loggedIn,
      clickHandler,
      dragHandler,
      hoverIn,
      hoverOut,
      styleBinding,
    };
  },
};
</script>

<style scoped>
/* ───────── 기본 그리드/라인 ───────── */
.hours { display:grid; grid-auto-rows:24px;
         border-right:2px solid #000; border-bottom:none; }
.hour  { width:7rem; height:24px; background:#fff; }
.hour:nth-child(4n+1){ border-top:2px solid #000; }
.hour:nth-child(4n+3){ border-top:1px solid #000; }
.hours .hour:first-child{ border-left:none; }
.hour:first-child { border-top:2px solid #000; }
.hour:last-child  { border-bottom:2px solid #000; }
.first-col{ border-left:none !important; }

/* ───────── 상태별 스타일 ───────── */
/* 로그인 안 한 사람 */
.disabled { pointer-events:none; opacity:.4; }

/* 정원 초과(3명 이상) */
.full, .host-lock {          /* host-lock = Author가 찍은 칸 */
  cursor:not-allowed;
  background:#d0d0d0 !important;
}

/* ───────── 빨간 X (Author 전용) ───────── */
.host-lock{
  position:relative;
}
.host-lock::after{
  content:"✕";
  position:absolute; inset:0;
  display:flex; align-items:center; justify-content:center;
  font:700 18px/1 sans-serif; color:#e00;
  pointer-events:none;    /* X 자체는 클릭 무시 */
}
</style>
