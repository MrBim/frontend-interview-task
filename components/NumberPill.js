import React from "react";
import { BluePill, AddWeight } from "../modules/property-details/style";

const NumberPill = ({ displayValue }) => {
  return (
    <BluePill>
      <AddWeight>{displayValue}</AddWeight>
    </BluePill>
  );
};

export default NumberPill;
