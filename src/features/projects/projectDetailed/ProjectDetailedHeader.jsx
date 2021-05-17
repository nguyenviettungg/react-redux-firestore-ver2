import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
import { format } from "date-fns";

const projectImageStyle = {
  filter: "brightness(30%)",
  height: "372px",
};

const projectImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

const ProjectDetailedHeader = ({ project }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/category/${project.language}.jpg`}
          fluid
          style={projectImageStyle}
        />

        <Segment basic style={projectImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={project.title}
                  style={{ color: "white" }}
                />
                <p> {format(project.date, "MMMM d, yyyy h:mm a")}</p>
                <p>
                  Hosted by <strong>{project.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Project</Button>
        <Button color="teal">JOIN THIS PROJECT</Button>

        <Button
          as={Link}
          to={`/manage/${project.id}`}
          color="orange"
          floated="right"
        >
          Manage Project
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedHeader;
