import { GetterTree } from "vuex";
import { EventData, State, User } from "./state";
import { isEmpty, chunk } from "lodash";
import { timeLabelGenerator, getLabelTop, getMonths } from "../utils";

export type Getters = {
  usernameExist      (state: State): boolean;
  getUserID          (state: State): string | null;
  getHostID          (state: State): string;
  getEventData       (state: State): EventData;
  getAvailability    (state: State): { [k: string]: string[] };
  getSplitAvailabilities(state: State, g: Getters): string[][][];
  getEventName       (state: State): string;
  getTimeLabels      (state: State): string[];
  getTopLabel        (state: State): string;
  getPageNumbers     (state: State, g: Getters): number;
  getBookedUsers     (state: State, g: Getters): User[];       // ← NEW
  getBookedCount     (state: State, g: Getters): number;       // ← NEW
  getEventDetails    (state: State, g: Getters):
                     { created: string; author: string; participants: number };
};

export const getters: GetterTree<State, State> & Getters = {
  /* 기본 -------------------------------------------------------------- */
  usernameExist: s => !!s.userID,
  getUserID    : s => s.userID,
  getHostID    : s => s.hostID,
  getEventData : s => s.eventData,
  getAvailability: s => s.eventData.availability,

  /* 1-A  달력 3D 배열 -------------------------------------------------- */
  getSplitAvailabilities(state) {
    if (isEmpty(state.eventData)) return [[[]]];

    const sec = (t: string) => +t.slice(0, 2) * 3600 + +t.slice(3) * 60;
    const slotsPerDay =
      Math.floor((sec(state.eventData.end_time) -
                  sec(state.eventData.start_time)) / 900);

    const keys  = Object.keys(state.eventData.availability)
                    .map(Number).sort((a, b) => a - b)
                    .map(String);
    const days  = chunk(keys, slotsPerDay);
    return chunk(days, 6);                 // 6 일 한 페이지
  },
  getPageNumbers: (_s, g) => g.getSplitAvailabilities.length - 1,

  /* 1-B  각종 라벨 ---------------------------------------------------- */
  getEventName : s =>
    isEmpty(s.eventData) ? "" : s.eventData.event_name,

  getTimeLabels(s) {
    if (isEmpty(s.eventData)) return [];
    return timeLabelGenerator(s.eventData.start_time, s.eventData.end_time);
  },
  getTopLabel(s) {
    if (isEmpty(s.eventData)) return "";
    return getLabelTop(s.eventData.start_date, s.eventData.end_date);
  },

  /* 2-A  Host(Author)를 뺀 예약자 목록/숫자 ---------------------------- */
  getBookedUsers(state) {
    if (isEmpty(state.eventData)) return [];
    const booked = new Set<string>();
    Object.values(state.eventData.availability)
      .forEach(arr => arr.forEach(id => booked.add(id)));
    booked.delete(state.hostID);                 // Host 제외
    return state.eventData.users.filter(u => booked.has(u.id));
  },
  getBookedCount: (_s, g) => g.getBookedUsers.length,

  /* 2-B  EventDetails 카드 ------------------------------------------ */
  getEventDetails(state, getters) {
  if (isEmpty(state.eventData))
    return { created: "", author: "", participants: 0 };
  const date   = new Date(state.eventData.createdAt);
  const month  = getMonths()[date.getMonth()];
  const created = `${date.getDate()} ${month} ${date.getFullYear()}`;
  const author =
    state.eventData.users.find(u => u.isHost)?.name ?? "unknown";
  const participants = getters.getBookedUsers.length;

  return { created, author, participants };
},
};
