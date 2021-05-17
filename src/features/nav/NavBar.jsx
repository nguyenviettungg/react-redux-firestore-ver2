import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = ({ setFormOpen }) => {
  
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={{ marginRight: "5px" }}
          />
          T-Project
        </Menu.Item>
        <Menu.Item as={NavLink} to="/projects" name="Projects" />
        <Menu.Item as={NavLink} to="/test" name="TestArea" />
        {authenticated && (
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createProject"
              positive
              inverted
              content="Create Project"
            />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu  />
        ) : (
          <SignedOutMenu  />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
