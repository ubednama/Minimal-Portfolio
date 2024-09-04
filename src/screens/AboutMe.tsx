import React, { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import LocationCapsule from "../components/LocationCapsule";
import MyDescription from "../components/MyDescription";

const AboutMe: React.FC = () => {
  const [startNotation, setStartNotation] = useState(false);
  const [mainParent] = useAutoAnimate<HTMLDivElement>({ duration: 300 });
  const [mountChildren, setMountChildren] = useState(false);

  useEffect(() => {
    setMountChildren(true);
    setStartNotation(true);
  }, []);

  return (
    <div
      className="h-screen max-h-screen flex items-center justify-center relative"
      id="AboutMeScreen"
    >
      <div
        className="flex justify-center items-center w-full h-full"
        ref={mainParent}
      >
        {mountChildren && <MyDescription startNotation={startNotation} />}
      </div>
      <div className="absolute top-0 left-0 w-full h-20" />
      <LocationCapsule />
    </div>
  );
};

export { AboutMe };