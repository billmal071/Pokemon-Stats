import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const components = {
    alert: (
      <div key={alertContext.id} className={`alert alert-${alertContext.type}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{alertContext.msg}</span>
      </div>
    ),
    none: <></>,
  };

  return components[alertContext.msg.length > 0 ? "alert" : "none"];
};

export default Alerts;
