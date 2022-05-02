import React from "react";
import RouteItem from "./RouteItem";

const AllRoutes = () => {
  const DUMMY_DATA = [
    {
      from: "Ranikuthi",
      to: "Eco Space",
      info: " Via Garia More, Bata, Patuli, SDF",
    },
    {
      from: "Eco Space",
      to: "Ranikuthi",
      info: "Via Patuli, Garia More, Bata",
    },
    {
      from: "Sonarpur",
      to: "Eco Space",
      info: "Via Kamalgazi",
    },
    {
      from: "Rang De Basanti",
      to: "Garia",
      info: "Via Rubby",
    },
    {
      from: "Garia",
      to: "Adventz Infinity",
      info: "Via Rubby",
    },
  ];
  return (
    <div>
      {DUMMY_DATA.map((para, index) => (
        <RouteItem key={index} from={para.from} to={para.to} info={para.info} />
      ))}
    </div>
  );
};

export default AllRoutes;
