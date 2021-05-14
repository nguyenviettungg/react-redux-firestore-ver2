import React, { useState } from "react";
import { Grid } from "semantic-ui-react";

import ProjectList from "../projectList/ProjectList";
import { fakeData } from "../../../app/api/fakeData";

const EventDashboard = () => {
  const [projects, setProjects] = useState(fakeData);

  // const handleCreateProject = (project) => {
  //   setProjects([...projects, project]);
  // };
  // const handleUpdateProject = (updatedProject) => {
  //   setProjects(
  //     projects.map((prj) =>
  //       prj.id === updatedProject.id ? updatedProject : prj
  //     )
  //   );
  // };
  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((prj) => prj.id !== projectId));
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectList projects={projects} deleteProject={handleDeleteProject} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
