import React, { useState, useContext, forwardRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../checkbox.css";

const Form = forwardRef(({ aboutRef, resultRef }, ref) => {
  const { addDate, clearDate, findHebDate, setCalculating } =
    useContext(GlobalContext);

  const [dateInp, setDateInp] = useState("");
  const [sunsetVal, setSunsetVal] = useState("off");

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResuls = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dateInp) {
      await addDate(dateInp);
      await findHebDate(dateInp, sunsetVal);
      await setCalculating(true);
    }
    scrollToResuls();
  };

  const handleReset = () => {
    clearDate();
    setDateInp("");
  };

  return (
    <section ref={ref}>
      <form
        className="flex-column retro-box half algn-center no-gap"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h2>Enter your birthday</h2>
        <input
          className="inpDate"
          type="date"
          onChange={(e) => setDateInp(e.target.value)}
        />
        <div className="toggleWrapper">
          <input
            type="checkbox"
            className="dn"
            id="dn"
            onChange={(e) => setSunsetVal(e.target.checked ? "on" : "off")}
          />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </div>
        <p className="instr">If you're not sure, stick with "BEFORE"</p>
        <div className="flex-row btn-box">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
        <p className="disclaimer">
          * This site does NOT collect or store any data
        </p>
      </form>
      <div className="flex-column retro-box half no-gap">
        <ol className="flex-column jst-center">
          <li>Enter your birth date. </li>
          <li>
            Indicate whether you were born before or after sunset. If you're not
            sure, leave the toggle on "BEFORE" (in this case your actual date
            may differ by one day from the displayed result).
          </li>
          <li>
            After submitting you'll discover:
            <ul>
              <li>Your Hebrew birthday</li>
              <li>Hebrew Holidays that occur on your birthday</li>
              <li>
                Hebrew-Gregorian concurrences (years in which your two birthdays
                coincide)
              </li>
            </ul>
          </li>
        </ol>
        <button onClick={scrollToAbout}>More info</button>
      </div>
    </section>
  );
});

Form.displayName = "Form";

export default Form;
