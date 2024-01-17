// SideBar.jsx

import React, { Component } from "react";
import MaterialIcon from "@material/react-material-icon";
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from "@material/react-list";
import "./SideBar.css"; // Import the CSS file

export default class SideBar extends Component {
  state = { selectedIndex: 0 };

  render() {
    const menuItems = [
      { icon: "home", text: "Home" },
      { icon: "chat", text: "Chat" },
      // Add more items as needed
    ];

    return (
      <div className="sidebar-container">
        <List singleSelection selectedIndex={this.state.selectedIndex}>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemGraphic graphic={<MaterialIcon icon={item.icon} />} />
              <ListItemText primaryText={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
