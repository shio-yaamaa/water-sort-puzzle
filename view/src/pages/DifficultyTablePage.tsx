import React from "react";
import "./DifficultyTablePage.css";
import { DifficultyTable } from "../components/DifficultyTable";
import { stages } from "core";

export const DifficultyTablePage: React.VFC = () => {
  return (
    <div className="DifficultyTablePage">
      <DifficultyTable stages={stages} videos={[]} difficulties={[]} />
    </div>
  );
};
