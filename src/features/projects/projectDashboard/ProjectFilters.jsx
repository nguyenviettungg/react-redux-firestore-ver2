import React from "react";
import Calendar from "react-calendar";
import { Header, Menu, MenuItem } from "semantic-ui-react";

const ProjectFilters = () => {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters"></Header>
        <MenuItem content="All Project"></MenuItem>
        <MenuItem content="Project Active"></MenuItem>
        <MenuItem content="Project I'm hosting"></MenuItem>
      </Menu>
      <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar />
    </>
  );
};

export default ProjectFilters;
