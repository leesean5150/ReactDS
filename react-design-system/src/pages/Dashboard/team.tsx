import React from "react";

import { Dashboard } from "../../components/Dashboard/index.tsx";

import "./style.css";

const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  imageUrl: "/images/dp.webp",
};
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Team", href: "/dashboard/team", current: true },
  { name: "Projects", href: "/dashboard/projects", current: false },
  { name: "Calendar", href: "/dashboard/calendar", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const notifications = [
  {
    message: "This is where the first notification should be rendered",
    href: "#",
  },
  {
    message: "This is where the second notification should be rendered",
    href: "#",
  },
  {
    message: "This is where the third notification should be rendered",
    href: "#",
  },
  {
    message: "This is where the fourth notification should be rendered",
    href: "#",
  },
];

const TeamExample = () => {
  return (
    <div>
      <Dashboard
        icon="/images/icon.png"
        profileImg={user.imageUrl}
        navigation={navigation}
        userMenu={userNavigation}
        notifications={notifications}
      />
      <div className="BodyContainer">
        <h1>This is where the Team body component should be rendered</h1>
      </div>
    </div>
  );
};

export { TeamExample };
