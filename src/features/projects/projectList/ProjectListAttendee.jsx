import React from "react";
import { Image, ListItem } from "semantic-ui-react";

const ProjectListAttendee = ({ attendee }) => {
  return (
    <ListItem>
      <Image size="mini" circular src={attendee.photoURL} />
    </ListItem>
  );
};

export default ProjectListAttendee;
