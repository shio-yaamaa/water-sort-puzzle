import React from "react";
import "./ExampleStatePage.css";
import { StatePreview } from "../components/StatePreview";
import { exampleStates } from "../data/exampleStates";
import { originalColors } from "../colors";

export const ExampleStatePage: React.VFC = () => {
  return (
    <div className="ExampleStatePage">
      {exampleStates.map((state, index) => (
        <StatePreview key={index} state={state} colors={originalColors} />
      ))}
    </div>
  );
};
