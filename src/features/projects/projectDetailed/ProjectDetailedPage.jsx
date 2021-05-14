import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectDetailedChat from "./ProjectDetailedChat";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSideBar from "./ProjectDetailedSideBar";

const ProjectDetailedPage = ({ match }) => {
  const project = useSelector((state) =>
    state.project.projects.find((prj) => prj.id === match.params.id)
  );
  return (
    <Grid>
      <GridColumn width={10}>
        <ProjectDetailedHeader project={project} />
        <ProjectDetailedInfo project={project} />
        <ProjectDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ProjectDetailedSideBar attendees={project.attendees} />
      </GridColumn>
    </Grid>
  );
};

export default ProjectDetailedPage;
