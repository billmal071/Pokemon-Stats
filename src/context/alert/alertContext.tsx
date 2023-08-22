import { createContext } from "react";
import { AlertContextType } from "../../types/interface.type";

const initial = {
  msg: "",
  type: "",
  id: "",
  setAlert: () => {},
};

const AlertContext = createContext<AlertContextType>(initial);

export default AlertContext;
