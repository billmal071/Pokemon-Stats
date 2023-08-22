import React, { ReactElement, ReactNode, useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState: React.FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  const initialState = {
    msg: "",
    type: "",
    id: "",
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert
  const setAlert = (msg: string, type: string) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: { msg, type, id },
      });
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
