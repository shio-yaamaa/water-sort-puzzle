import React from "react";
import "./App.css";
import { Row } from "./Row";
import { stages } from "core";
import { solve } from "../solve";

const transfers = solve(stages[3]);

export const App: React.VFC = () => {
  return (
    <div className="App">
      {transfers.map((transfer, index) => (
        <Row
          key={index}
          parentState={transfer.parentState}
          children={transfer.children}
        />
      ))}
    </div>
  );
};
