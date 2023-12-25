import React from "react";
import { useNavigate } from "react-router-dom";

import { Table } from "../../components/Table/index.tsx";

const TableExample = () => {
  const tableHeader = ["Name", "Title", "Email", "Role"];
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      title: "Back-end Developer",
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Appleseed",
      title: "Fullstack Developer",
      email: "john.appleseed@example.com",
      role: "Senior Developer",
    },
    {
      name: "Blackacre",
      title: "Project Manager",
      email: "blackacre@example.com",
      role: "Manager",
    },
  ];
  const rowAttributes = ["name", "title", "email", "role"];
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("#add");
  };
  const handleEdit = () => {
    navigate("#edit");
  };

  return (
    <Table
      name="Insert table name here"
      description="This is where the table description will be rendered"
      header={tableHeader}
      rowAttributes={rowAttributes}
      tableData={people}
      topButton="Add user"
      handleAdd={handleAddUser}
      dataButton="Edit"
      handleEdit={handleEdit}
    />
  );
};

export { TableExample };
