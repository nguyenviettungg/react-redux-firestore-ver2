import React from "react";
import { useDispatch } from "react-redux";
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
import { deleteProject } from "../redux/projectActions";
import { format } from "date-fns";

const ProjectListItem = ({ project }) => {
  const dispatch = useDispatch();
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={project.hostPhotoURL} />
            <Item.Content>
              <Item.Content content={project.title} />
              <ItemDescription>Hosted by {project.hostedBy}</ItemDescription>
              {project.status === "active" ? (
                <Button floated="right" basic color="green" animated>
                  <Button.Content visible>Status</Button.Content>
                  <Button.Content hidden>Active</Button.Content>
                </Button>
              ) : (
                <Button floated="right" basic color="red" animated>
                  <Button.Content visible>Status</Button.Content>
                  <Button.Content hidden>Inactive</Button.Content>
                </Button>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(project.date, "MMMM d, yyyy h:mm a")}
          <Icon name="marker" /> {project.department}
          <Icon name="tag" /> {project.typeApp}
          <Icon name="pencil alternate" /> {project.language}
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
          onClick={() => dispatch(deleteProject(project.id))}
          color="red"
          floated="right"
          content="Delete"
        ></Button>
        <Button
          as={Link}
          to={`/projects/${project.id}`}
          color="teal"
          floated="right"
          content="View"
        ></Button>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectListItem;
