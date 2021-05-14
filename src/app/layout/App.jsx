import React from "react";
import { Route, useLocation } from "react-router";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import ProjectDashboard from "../../features/projects/projectDashboard/ProjectDashboard";
import ProjectDetailedPage from "../../features/projects/projectDetailed/ProjectDetailedPage";
import ProjectForm from "../../features/projects/projectForm/ProjectForm";
import TestBox from "../../features/test/TestBox";

const App = () => {
  const { key } = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/projects" component={ProjectDashboard} />
              <Route path="/projects/:id" component={ProjectDetailedPage} />
              <Route path="/test" component={TestBox} />
              <Route
                path={["/createProject", "/manage/:id"]}
                component={ProjectForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
