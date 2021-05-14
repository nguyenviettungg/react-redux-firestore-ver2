import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProjectDetailedChat from "./ProjectDetailedChat";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSideBar from "./ProjectDetailedSideBar";

const ProjectDetailedPage = () => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ProjectDetailedHeader />
        <ProjectDetailedInfo />
        <ProjectDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ProjectDetailedSideBar />
      </GridColumn>
    </Grid>
  );
};

export default ProjectDetailedPage;
