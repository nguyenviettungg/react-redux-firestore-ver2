import React from "react";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import ProjectDashboard from "../../features/projects/projectDashboard/ProjectDashboard";
import ProjectDetailedPage from "../../features/projects/projectDetailed/ProjectDetailedPage";
import ProjectForm from "../../features/projects/projectForm/ProjectForm";

const App = () => {

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar  />
            <Container className="main">
              <Route exact path="/projects" component={ProjectDashboard} />
              <Route path="/projects/:id" component={ProjectDetailedPage} />
              <Route
                path={["/createProject", "/manage/:id"]}
                component={ProjectForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
