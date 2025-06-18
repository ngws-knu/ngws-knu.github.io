import { MutationTree } from "vuex";
import { State, EventData } from "./state";
import { User } from "./state";

export enum MutationType {
  FetchAvailability = "FETCH_AVAILABILITY",
  AddAvailability = "ADD_AVAILABILITY",
  RemoveAvailability = "REMOVE_AVAILABILITY",
  AddUserName = "ADD_USERNAME",
  RetrieveUserID = "RETRIEVE_USERID",
  updateHover = "UPDATE_HOVER",
  removeSelfAvailability = "REMOVE_SELF_AVAILABILITY",
}

export type Mutations = {
  [MutationType.FetchAvailability](state: State, data: EventData): void;
  [MutationType.AddAvailability](
    state: State,
    content: { unixtime: string; eventID: string }
  ): void;
  [MutationType.RemoveAvailability](state: State, content: any): void;
  [MutationType.AddUserName](state: State, user: User): void;
  [MutationType.RetrieveUserID](state: State, content: any): void;
  [MutationType.updateHover](state: State, unixtime: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.FetchAvailability](state, data) {
    for (const key in data.availability) {
    data.availability[key] = [...new Set(data.availability[key])];
  }

  const keys = Object.keys(data.availability).map(Number).sort((a,b)=>a-b);
  const last = keys[keys.length-1];
  const slot = 15*60;
  const need =  (data.metaEnd - last) / slot - 1;
  for(let i=1;i<=need;i++){
    data.availability[last + i*slot] = [];
  }

  state.eventData = data;
  const host = data.users.find((u:any)=>u.isHost);
  state.hostID = host ? host.id : "";
  },
  [MutationType.AddAvailability](state, content) {
    const { unixtime } = content;
    const userID = state.userID;
    const slot = state.eventData.availability[unixtime];
    if (!slot.includes(userID)) slot.push(userID);  
  },

  [MutationType.RemoveAvailability](state, content) {
    const { unixtime } = content;
    const userID = state.userID;
    state.eventData.availability[unixtime] = state.eventData.availability[
      unixtime
    ].filter(val => val !== userID);
  },

  [MutationType.AddUserName](state, user) {
    const dupe = state.eventData.users.find(u => u.name === user.name);
    if (dupe) {
      dupe.id = user.id;
    } else {
      state.eventData.users.push(user);
    }
    state.userID = user.id;
  },
  [MutationType.RetrieveUserID](state, eventID) {
    const userStorage = localStorage.getItem(eventID);
    if (userStorage != null) {
      state.userID = userStorage;
    }
  },
  [MutationType.updateHover](state, unixtime) {
    if (unixtime === "MouseOut") {
    state.currentHover = [];
  } else {
    state.currentHover = state.eventData.availability[unixtime];
  }
  },
  [MutationType.removeSelfAvailability](state) {
    for (const unixtime of Object.keys(state.eventData.availability)) {
      state.eventData.availability[unixtime] = state.eventData.availability[
        unixtime
      ].filter((userid) => userid !== state.userID);
    }
  },
};
