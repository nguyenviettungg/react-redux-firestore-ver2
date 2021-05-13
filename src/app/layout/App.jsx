import React, { useState, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ProjectDashboard from "../../features/projects/projectDashboard/ProjectDashboard";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedProject(null);
    setFormOpen(true);
  };
  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <ProjectDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectProject={handleSelectProject}
          selectedProject={selectedProject}
        />
      </Container>
    </Fragment>
  );
};

export default App;
