import React, { useState } from "react";

import { List } from "../../components/ListNiche/index.tsx";
import { FilterWithDisplayNiche } from "../../components/FilterWithDisplayNiche/index.tsx";

import "./style.css";

const items = [
  {
    id: "filterwithdisplay",
    name: "Checkbox filter with active filters display",
    hrefPreview: "/filterwithdisplay",
    hrefCode: "/filterwithdisplay-code",
    type: "Filter",
  },
  {
    id: "checkboxfilter",
    name: "Checkbox filter with option for dropdown menu on the left",
    hrefPreview: "/checkboxfilter",
    hrefCode: "/checkboxfilter-code",
    type: "Filter",
  },
  {
    id: "dashboard",
    name: "Dashboard with company icon, notifications and profile dropdown",
    hrefPreview: "/dashboard",
    hrefCode: "/dashboard-code",
    type: "Dashboard",
  },
  {
    id: "lightthemetable",
    name: "Light theme table with add button and edit button",
    hrefPreview: "/table",
    hrefCode: "/table-code",
    type: "Table",
  },
  {
    id: "testcomponent",
    name: "Test component",
    hrefPreview: "/test",
    hrefCode: "/test",
    type: "Others",
  },
];

const rightFilters = [
  {
    id: "type",
    name: "Type",
    options: [
      { value: "Dashboard", label: "Dashboard" },
      { value: "Filter", label: "Filter" },
      { value: "Table", label: "Table" },
      { value: "Others", label: "Others" },
    ],
  },
];

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const placeholderText = "Search by name";
  var displayedItems = items.filter((item) =>
    filters.length === 0 ? true : filters.includes(item.type)
  );

  const handleSelect = (newFilter) => {
    if (filters.includes(newFilter)) {
      setFilters((prev) => prev.filter((filter) => filter !== newFilter));
    } else {
      setFilters((prev) => [...prev, newFilter]);
    }
  };
  const handleRemove = (filterToRemove) => {
    const indexToRemove = filters.indexOf(filterToRemove);
    const newFilters = filters
      .slice(0, indexToRemove)
      .concat(filters.slice(indexToRemove + 1));
    setFilters(newFilters);
  };
  const handleTextInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <FilterWithDisplayNiche
        placeholder={placeholderText}
        value={search}
        handleSubmit={handleSubmit}
        handleTextInput={handleTextInput}
        rightFilters={rightFilters}
        handleSelect={handleSelect}
        selectedFilter={filters}
        handleRemove={handleRemove}
      />
      <div id="homepageContainer">
        <List items={displayedItems} search={search} />
      </div>
    </div>
  );
};

export { Homepage };
