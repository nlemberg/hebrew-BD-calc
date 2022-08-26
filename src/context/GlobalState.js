import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  date: {},
  hebDate: {},
  concurrences: [],
  calculating: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addDate(newDate) {
    dispatch({
      type: "ADD_DATE",
      payload: newDate,
    });
  }

  function clearDate() {
    dispatch({
      type: "CLEAR_DATE",
    });
  }

  async function findHebDate(dateInp, sunsetVal) {
    const url = `https://www.hebcal.com/converter?cfg=json&date=${dateInp}&gs=${sunsetVal}&g2h=1&strict=1`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "FIND_HEB_DATE",
        payload: data,
      });
    }
  }

  async function findConc() {
    const years = [];
    for (let i = +state.hebDate.gy + 1; i <= +state.hebDate.gy + 120; i++) {
      const response = await fetch(
        `https://www.hebcal.com/converter?cfg=json&gy=${i}&gm=${
          state.hebDate.gm
        }&gd=${state.hebDate.gd}&gs=${state.hebDate.afterSunset ? "on" : "off"}`
      );
      if (response.ok) {
        const checkDate = await response.json();
        if (checkDate.hd === state.hebDate.hd) {
          years.push(i);
        }
      }
    }
    dispatch({
      type: "FIND_CONC",
      payload: years,
    });
  }

  function setCalculating(val) {
    dispatch({
      type: "SET_CALCULATING",
      payload: val,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        date: state.date,
        hebDate: state.hebDate,
        concurrences: state.concurrences,
        calculating: state.calculating,
        addDate,
        clearDate,
        findHebDate,
        findConc,
        setCalculating,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
