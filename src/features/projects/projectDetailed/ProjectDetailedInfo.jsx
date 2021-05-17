import { format } from "date-fns";
import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const ProjectDetailedInfo = ({ project }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <Header as="h4" content="Mô tả :" />
            <p>{project.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <Header as="h4" content="Ngày tạo :" />
            <span> {format(project.date, "MMMM d, yyyy h:mm a")}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <Header as="h4" content="Phòng ban quản lý :" />
            <span>{project.department}</span>
          </Grid.Column>
          {/* <Grid.Column width={4}>
            <Button disabled color="teal" size="tiny" content={project.typeApp} />
          </Grid.Column> */}
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="tag" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <Header as="h4" content="Loại App :" />
            <span>{project.typeApp}</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedInfo;
