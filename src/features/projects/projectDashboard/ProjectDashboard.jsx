import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ProjectForm from "../projectForm/ProjectForm";
import ProjectList from "../projectList/ProjectList";
import { fakeData } from "../../../app/api/fakeData";

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectProject,
  selectedProject,
}) => {
  const [projects, setProjects] = useState(fakeData);

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };
  const handleUpdateProject = (updatedProject) => {
    setProjects(
      projects.map((prj) =>
        prj.id === updatedProject.id ? updatedProject : prj
      )
    );
    selectProject(null);
    setFormOpen(false);
  };
  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((prj) => prj.id !== projectId));
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectList
          projects={projects}
          selectProject={selectProject}
          deleteProject={handleDeleteProject}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <ProjectForm
            setFormOpen={setFormOpen}
            setProject={setProjects}
            createProject={handleCreateProject}
            selectedProject={selectedProject}
            updateProject={handleUpdateProject}
            key={selectedProject ? selectedProject.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
