import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";
import { createProject, updateProject } from "../redux/projectActions";

const ProjectForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) =>
    state.project.projects.find((prj) => prj.id === match.params.id)
  );
  const initialValues = selectedProject ?? {
    title: "",
    language: "",
    description: "",
    typeApp: "",
    department: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleFormSubmit = () => {
    selectedProject
      ? dispatch(updateProject({ ...selectedProject, ...values }))
      : dispatch(
          createProject({
            ...values,
            id: cuid,
            hostedBy: "Tung",
            attendees: [],
            hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
          })
        );
    history.push("/projects");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Segment clearing>
      <Header
        content={selectedProject ? "Edit the project" : "Create new Project"}
      ></Header>
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            name="title"
            type="text"
            placeholder="Project title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Programming Language"
            name="language"
            value={values.language}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Type of App"
            name="typeApp"
            value={values.typeApp}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Produced by Department"
            name="department"
            value={values.department}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="date"
            placeholder="Date created"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <Button
          as="Link"
          to="/projects"
          type="submit"
          floated="right"
          content="Cancel"
        />
        <Button type="submit" floated="right" positive content="Submit" />
      </Form>
    </Segment>
  );
};

export default ProjectForm;
