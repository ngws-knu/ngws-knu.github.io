export interface EventData {
  users: User[];
  _id: string;
  event_name: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  availability: { [key: string]: string[] };
  createdAt: string;
  updatedAt: string;
  __v: number;
  metaEnd: number;
}

export interface User {
  id: string;
  name: string;
  isHost?: boolean;
}

export interface State {
  eventData: EventData;
  userID: string;
  hostID: string;
  currentHover: string[];
}

export const state: State = {
  eventData: <EventData>{},
  userID: "",
  hostID: "", 
  currentHover: [],
};
