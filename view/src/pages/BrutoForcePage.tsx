import React from "react";
import "./BrutoForcePage.css";
import { Row } from "../components/Row";
import { stages } from "core";
import { solve } from "../solve";

const transfers = solve(stages[3]);

export const BrutoForcePage: React.VFC = () => {
  return (
    <div className="BrutoForcePage">
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
