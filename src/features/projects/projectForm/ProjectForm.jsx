import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Segment } from "semantic-ui-react";
import { createProject, updateProject } from "../redux/projectActions";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { language, typeOfApp, status } from "../../../app/api/options";
import MyDateInput from "../../../app/common/form/MyDateInput";

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

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    language: Yup.string().required("You must provide programming language"),
    description: Yup.string().required("Fill this input"),
    typeApp: Yup.string().required("You must provide a type of app"),
    department: Yup.string().required("Fill this input"),
    date: Yup.string().required("Fill this input"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedProject
            ? dispatch(updateProject({ ...selectedProject, ...values }))
            : dispatch(
                createProject({
                  ...values,
                  id: cuid(),
                  hostedBy: "Tung",
                  status: "active",
                  attendees: [],
                  hostPhotoURL:
                    "https://randomuser.me/api/portraits/men/21.jpg",
                })
              );
          history.push("/projects");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Project details"></Header>
            <MyTextInput name="title" placeholder="Project title" />
            <MySelectInput
              name="language"
              placeholder="Programming Language"
              options={language}
            />
            <MySelectInput
              name="typeApp"
              placeholder="Type of App"
              options={typeOfApp}
            />
            <MyTextArea name="description" placeholder="Description" rows={3} />
            <MyTextInput
              name="department"
              placeholder="Produced by Department"
            />
            <MySelectInput
              name="status"
              placeholder="Status of Project"
              options={status}
            />
            <MyDateInput
              name="date"
              placeholderText="Date created"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              disabled={isSubmitting}
              as="Link"
              to="/projects"
              type="submit"
              floated="right"
              content="Cancel"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content="Submit"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default ProjectForm;
