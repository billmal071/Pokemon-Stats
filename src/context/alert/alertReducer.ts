import { SET_ALERT, REMOVE_ALERT } from "../types";
import { AlertReducerAction } from "../types";
import { AlertType } from "../../types/interface.type";

export default (state: AlertType, action: AlertReducerAction): AlertType => {
  switch (action.type) {
    case SET_ALERT:
      return { ...action.payload };
    case REMOVE_ALERT:
      return state;
    default:
      return state;
  }
};
