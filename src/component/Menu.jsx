import React, { Component } from "react";
import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from "@material/react-menu";
import styled from "styled-components";
import "@material/react-list/index.scss";
import "@material/react-menu-surface/index.scss";
import "@material/react-menu/index.scss";

const StyledMenuListItem = styled(MenuListItem)`
  color: blue;
`;

class MenuScreenshotTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const menuOptions = [
      "Home",
      "Message",
      "Notification",
      "Setting",
      "Logout",
    ];

    return (
      <Menu
        open={this.state.open}
        onClose={this.onClose}
        onSelected={() => console.log("select")}
      >
        <MenuList>
          {menuOptions.map((option, index) => (
            <StyledMenuListItem key={index}>
              <MenuListItemText primaryText={option} />
            </StyledMenuListItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
}

export default MenuScreenshotTest;
