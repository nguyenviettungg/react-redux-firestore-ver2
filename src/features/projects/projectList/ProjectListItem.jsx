import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Item,
  ItemDescription,
  List,
  Segment,
} from "semantic-ui-react";
import ProjectListAttendee from "./ProjectListAttendee";

const ProjectListItem = ({ project, selectProject, deleteProject }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={project.hostPhotoURL} />
            <Item.Content>
              <Item.Content content={project.title} />
              <ItemDescription>Hosted by {project.hostedBy}</ItemDescription>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {project.date}
          <Icon name="clock" /> {project.department}
          <Icon name="clock" /> {project.typeApp}
          <Icon name="clock" /> {project.language}
          {/* trung tam bo phan phong ban tao project */}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {project.attendees.map((attendee) => (
            <ProjectListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{project.description}</div>
        <Button
          onClick={() => deleteProject(project.id)}
          color="red"
          floated="right"
          content="Delete"
        ></Button>
        <Button as={Link} to={`/projects/${project.id}`} color="teal" floated="right" content="View"></Button>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectListItem;
