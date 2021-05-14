import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          T-Project
        </Menu.Item>
        <Menu.Item as={NavLink} to="/projects" name="Projects" />
        {authenticated && (
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createProject"
              onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Project"
            />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
