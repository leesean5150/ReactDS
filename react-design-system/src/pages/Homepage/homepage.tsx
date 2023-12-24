import React from "react";

import {List} from "../../components/List/index.tsx"

import "./style.css"

const items = [
  { id: 1, name: "Dashboard", hrefPreview:"/dashboard" },
  { id: 2, name: "List", hrefPreview:"#"},
  { id: 3, name: "Table", hrefPreview:"#"},
]

const Homepage = () => {
  return (
    <div className="bodyContainer">
      <List items={items}/>
    </div>
  );
}

export default Homepage;