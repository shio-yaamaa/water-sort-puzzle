import React from "react";
import "./DifficultyTablePage.css";
import { DifficultyTable } from "../components/DifficultyTable";
import { stages, videos } from "core";
import successRates from "../data/successRates.json";

export const DifficultyTablePage: React.VFC = () => {
  return (
    <div className="DifficultyTablePage">
      <DifficultyTable
        stages={stages}
        successRates={successRates}
        videos={videos}
      />
    </div>
  );
};
