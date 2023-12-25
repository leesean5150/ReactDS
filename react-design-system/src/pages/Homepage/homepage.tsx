import React from "react";

import { List } from "../../components/List-niche/index.tsx";

import "./style.css";

const items = [
  {
    id: 1,
    name: "Dashboard",
    hrefPreview: "/dashboard",
    hrefCode: "/dashboard-code",
    code: "dashboard",
  },
  { id: 2, name: "Table", hrefPreview: "#", code: "table" },
];

const Homepage = () => {
  return (
    <div className="bodyContainer">
      <List items={items} />
    </div>
  );
};

export { Homepage };
