import React, { forwardRef, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "./Loader";
import "../App.css";

const Results = forwardRef(({ formRef }, ref) => {
  const { date, hebDate, concurrences, calculating, findConc } =
    useContext(GlobalContext);

  const events = Object.keys(hebDate).includes("events")
    ? hebDate.events.length > 1
      ? `Jewish holidays/special occasions on this day: ${hebDate.events[0]}`
      : "No Jewish holidays on this Hebrew date"
    : "No Jewish holidays on this Hebrew date";

  const scrollToSection = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (calculating) {
      findConc();
    }
  }, [calculating, findConc]);

  return (
    <section ref={ref}>
      {hebDate.hebrew ? (
        <div className="flex-column half">
          <div className="retro-box">
            <p>
              The date you entered is{" "}
              <strong>
                {new Date(date).toUTCString().slice(0, 16)}
                {", "}
                {hebDate.afterSunset ? "after" : "before"} sunset.
              </strong>
            </p>
          </div>
          <div className="retro-box">
            <p>
              {" "}
              That's{" "}
              <strong>
                {hebDate.hd} {hebDate.hm} {hebDate.hy}
              </strong>{" "}
              according to the Hebrew Calendar{" "}
            </p>
          </div>
          <div className="retro-box">
            <p>
              {" "}
              In Hebrew: <strong>{hebDate.hebrew} </strong>{" "}
            </p>
          </div>
          <div className="retro-box">{events}</div>
        </div>
      ) : (
        <div className="retro-box flex-column jst-center algn-center">
          <p>Nothing to show yet, please enter a date above to view results.</p>
          <button className="inpDate" onClick={scrollToSection}>
            Let's go!
          </button>
        </div>
      )}
      {calculating ? (
        <div className="flex-column retro-box half no-gap rainbow">
          <h2>Calculating Concurrences...</h2>
          <Loader />
        </div>
      ) : concurrences.length > 0 ? (
        <div className="flex-column retro-box half">
          <h2>Concurrences</h2>
          <p>
            In the 120 years following your birth, your Gregorian birthday and
            your Hebrew birthday <strong>coincide</strong> in the following
            years:
          </p>
          <ul>
            {concurrences.map((year) => (
              <li key={year}>
                <strong>{year}</strong>
              </li>
            ))}
          </ul>
          <button onClick={scrollToSection}>Let's go again!</button>
        </div>
      ) : null}
    </section>
  );
});

Results.displayName = "Results";

export default Results;
