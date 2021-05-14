import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  Menu,
} from "semantic-ui-react";

const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/images/user.png" />
      <Dropdown pointing="top left" text="Tungdz">
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createProject"
            text="Create Project"
            icon="plus"
          />
          <DropdownItem text="My profile" icon="user" />
          <DropdownItem onClick={signOut} text="Sign out" icon="power" />
        </DropdownMenu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
