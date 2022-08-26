const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "CLEAR_DATE":
      return {
        date: "",
        hebDate: {
          gy: "",
          gm: "",
          gd: "",
          afterSunset: false,
          hy: "",
          hm: "",
          hd: "",
          hebrew: "",
          heDateParts: { y: "", d: "", m: "" },
          events: [],
        },
        concurrences: [],
        calculating: false,
      };
    case "FIND_HEB_DATE":
      return {
        ...state,
        hebDate: action.payload,
      };
    case "FIND_CONC":
      return {
        ...state,
        concurrences: action.payload,
        calculating: false,
      };
    case "SET_CALCULATING":
      return {
        ...state,
        calculating: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
