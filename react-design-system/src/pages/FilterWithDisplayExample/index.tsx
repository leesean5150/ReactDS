import React, { useState } from "react";

import { FilterWithDisplay } from "../../components/FilterWithDisplay/index.tsx";
import { Table } from "../../components/Table/index.tsx";

const FilterWithDisplayExample = () => {
  // Filter components
  const leftFilter = [
    { name: "Most Popular", href: "#" },
    { name: "Best Rating", href: "#" },
    { name: "Newest", href: "#" },
  ];
  const rightFilters = [
    {
      id: "category",
      name: "Category",
      options: [
        { value: "tees", label: "Tees" },
        { value: "crewnecks", label: "Crewnecks" },
        { value: "hats", label: "Hats" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "clothing-company", label: "Clothing Company" },
        { value: "fashion-inc", label: "Fashion Inc." },
        { value: "shoes-n-more", label: "Shoes 'n More" },
      ],
    },
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "black", label: "Black" },
        { value: "grey", label: "Grey" },
      ],
    },
  ];
  const [filters, setFilters] = useState<string[]>([]);

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

  // Table components
  const items = [
    {
      name: "Black T-Shirt",
      category: "tees",
      brand: "clothing-company",
      color: "black",
    },
    {
      name: "Grey T-Shirt",
      category: "tees",
      brand: "fashion-inc",
      color: "grey",
    },
    {
      name: "White Crew Neck",
      category: "crewnecks",
      brand: "clothing-company",
      color: "white",
    },
    {
      name: "Black Crew Neck",
      category: "crewnecks",
      brand: "fashion-inc",
      color: "black",
    },
  ];
  const tableHeader = ["Name", "Category", "Brand", "Color"];
  const rowAttributes = ["name", "category", "brand", "color"];

  const handleClick = () => {
    console.log("Button clicked");
  };

  var displayedItems = items.filter(
    (item) =>
      filters.includes(item.category) ||
      filters.includes(item.brand) ||
      filters.includes(item.color) ||
      filters.length === 0
  );

  return (
    <div>
      <FilterWithDisplay
        leftMost={false}
        leftMostName="Sort"
        leftFilter={leftFilter}
        rightFilters={rightFilters}
        handleSelect={handleSelect}
        selectedFilter={filters}
        handleRemove={handleRemove}
      />
      <Table
        name="Inventory"
        description="This is a table with fully functioning filters."
        header={tableHeader}
        rowAttributes={rowAttributes}
        tableData={displayedItems}
        topButton="Add item"
        handleAdd={handleClick}
        dataButton="Edit"
        handleEdit={handleClick}
      />
    </div>
  );
};

export { FilterWithDisplayExample };
