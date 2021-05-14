import React from "react";
import { Grid } from "semantic-ui-react";

import ProjectList from "../projectList/ProjectList";

import { useSelector } from "react-redux";

const EventDashboard = () => {
  const { projects } = useSelector((state) => state.project);

 
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectList projects={projects} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
