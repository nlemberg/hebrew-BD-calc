import React, { forwardRef } from "react";
import cake from "../images/birthday_cake.png";

const About = forwardRef(({ formRef }, ref) => {
  const scrollToSection = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref}>
      <div className="flex-column retro-box no-gap">
        <div className="flex-column no-gap abt">
          <h2>About this</h2>
          <p>
            According to the Gregorian calendar today is{" "}
            {new Date().toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            . But it's not the only one out there -- over 40 different calendars
            are currently in use around the world!
          </p>
          <p>
            While the Gregorian calendar is based on the Earth's revolution
            around the sun, the Hebrew/Jewish calendar takes into account the
            rhythms of the sun AND the moon. These two calendars are on totally
            different cycles! For example, the Hebrew year is 11 days shorter.
          </p>
          <p>
            It is a common belief that a person's Hebrew and Gregorian birthdays
            coincide every 19 years. As a child, I pictured these occurrences as
            special, magical occasions: the universe finally aligning just for
            me. Imagine my disappointment when I turned 19, and my birthday
            came, as usual, on two different days.
          </p>
          <h4>
            I created this app to calculate when, if ever, the universe aligns
            for me. Now you can use it too!
          </h4>
        </div>
        <button onClick={scrollToSection}>Go for it</button>
      </div>
      <div className="flex-column img-lnk">
        <div className="flex-column retro-box lnk">
          <a
            href="https://nlemberg.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This magic machine was created with &#10084; by Naama Lemberg <br />
            <br />
            {">>>"} Check out my other stuff {"<<<"}
          </a>
        </div>
        <a
          href="https://nlemberg.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="retro-box cake-img"
            src={cake}
            alt="birthday cake linking to my portfolio"
          />
        </a>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
