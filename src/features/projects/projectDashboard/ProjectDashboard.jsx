import React from "react";
import { Grid } from "semantic-ui-react";

import ProjectList from "../projectList/ProjectList";

import { useSelector } from "react-redux";
// import LoadingComponent from "../../../app/layout/LoadingComponent";
import ProjectListItemPlaceholder from "../projectDetailed/ProjectListItemPlaceholder";
import ProjectFilters from "./ProjectFilters";

const ProjectDashboard = () => {
  const { projects } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.async);

  // if (loading) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <ProjectListItemPlaceholder />
            <ProjectListItemPlaceholder />
          </>
        )}
        <ProjectList projects={projects} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProjectFilters />
      </Grid.Column>
    </Grid>
  );
};

export default ProjectDashboard;
