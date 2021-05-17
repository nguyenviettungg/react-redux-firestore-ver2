import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  Menu,
} from "semantic-ui-react";
import { signOutUse } from "../auth/authActions";

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || "/assets/images/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createProject"
            text="Create Project"
            icon="plus"
          />
          <DropdownItem text="My profile" icon="user" />
          <DropdownItem
            onClick={() => {
              dispatch(signOutUse());
              history.push("/");
            }}
            text="Sign out"
            icon="power"
          />
        </DropdownMenu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
