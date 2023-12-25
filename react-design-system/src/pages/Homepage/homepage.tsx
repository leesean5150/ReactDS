import React from "react";

import { List } from "../../components/List-niche/index.tsx";

import "./style.css";

const items = [
  {
    id: 1,
    name: "Dashboard",
    hrefPreview: "/dashboard",
    hrefCode: "/dashboard-code",
  },
  {
    id: 2,
    name: "Table",
    hrefPreview: "/table",
    hrefCode: "/table-code",
  },
  {
    id: 100,
    name: "Test",
    hrefPreview: "/test",
    hrefCode: "/test",
  },
];

const Homepage = () => {
  return (
    <div className="bodyContainer">
      <List items={items} />
    </div>
  );
};

export { Homepage };
