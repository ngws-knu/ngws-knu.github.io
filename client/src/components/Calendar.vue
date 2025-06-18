<template>
  <div class="outer">
    <div class="timelabels">
      <span v-for="tlabel in timeLabels" :key="tlabel">{{ tlabel }}</span>
    </div>
    <div class="calendar">
      <div class="day" v-for="(day, idx) in result" :key="idx">
        <div class="daylabel">
          <span>{{ getDate(day[0]) }}</span>
          <p>{{ getDay(day[0]) }}</p>
        </div>
        <HourBox :day="day" :idx="idx" />
      </div>
    </div>
  </div>
</template>

<script>
import { ActionTypes } from "@/store/actions";
import { getDate, getDay } from "../utils";
import HourBox from "./HourBox.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, toRefs } from "vue";

export default {
  components: { HourBox },
  props: {
    page: { type: Number, required: true },
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();
    const { page } = toRefs(props);
    store.dispatch(ActionTypes.loadAvailabilities, route.params.id);
    return {
      result: computed(() => store.getters.getSplitAvailabilities[page.value]),
      timeLabels: computed(() => store.getters.getTimeLabels),
      getDate,
      getDay,
    };
  },
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: unset;
  scrollbar-gutter: stable both-edges;
  padding-bottom:17px;
  margin-left:27%;
  &::-webkit-scrollbar-corner{ background:#f7f7f7; }
}
.calendar {
  display: inline-flex;
  border-radius: 20px 20px 0 0;
  overflow: visible;
  background-color: #f7f7f7;
  margin-right: 60px;
  flex-shrink: 0;
}

.timelabels {
 display: grid;
  grid-auto-rows: 24px;
  padding-top: 76px;
  margin-right: 18px;
  text-align: right;

  flex-shrink: 0;               
  min-width: 50px;                

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 4px;
    font-size: 0.8rem;

    white-space: nowrap;     
  }
}

.timelabels span:nth-child(4n + 1){ font-weight:600; }


.hour-label {
  margin: 0px 5px;
  display: inline-block;
  width: 50px;
}
.day {
  text-align: center;
}
.daylabel {
  color: #000000;
  top: -35px;
  text-align: center;
  align-self: center;
  display: inline-block;
  white-space: normal;
  width: 100%;
  margin: 10px 0;
  span {
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    text-transform: uppercase;
  }
}

 .calendar .day:first-child .hours {
   border-left: 2px solid #000;
 }


 .calendar .day:last-child .hours {
   border-right: 2px solid #000;
 }
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 3s linear;
}

</style>