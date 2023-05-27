import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-slate-700 p-4 m-3">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          className="bg-zinc-300 px-2"
          onClick={() => {
            setIsVisible();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="bg-zinc-300 px-2"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          visibleSection !== "about"
            ? setVisibleSection("about")
            : setVisibleSection("")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          visibleSection !== "team"
            ? setVisibleSection("team")
            : setVisibleSection("")
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          visibleSection !== "careers"
            ? setVisibleSection("careers")
            : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
