import React, { useState } from "react";

import { List } from "../../components/List-niche/index.tsx";
import { Searchbar } from "../../components/Searchbar/index.tsx";

import "./style.css";

const items = [
  {
    id: 1,
    name: "Dashboard with company icon, notifications and profile dropdown",
    hrefPreview: "/dashboard",
    hrefCode: "/dashboard-code",
    type: "Dashboard",
  },
  {
    id: 2,
    name: "Filter",
    hrefPreview: "/filter",
    hrefCode: "/filter-code",
    type: "Filter",
  },
  {
    id: 3,
    name: "Light theme table with add button and edit button",
    hrefPreview: "/table",
    hrefCode: "/table-code",
    type: "Table",
  },
  {
    id: 100,
    name: "Test component",
    hrefPreview: "/test",
    hrefCode: "/test",
    type: "Other",
  },
];

const Homepage = () => {
  const [search, setSearch] = useState("");
  const placeholderText = "Search for the component here...";

  const handleTextInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div id="homepageContainer">
        <div>
          <Searchbar
            placeholder={placeholderText}
            value={search}
            handleSubmit={handleSubmit}
            handleTextInput={handleTextInput}
          />
        </div>
        <List items={items} search={search} />
      </div>
    </div>
  );
};

export { Homepage };
