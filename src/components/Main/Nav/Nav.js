import React, { Component } from 'react';
import { FaHome, FaFlag, FaUser, FaRegChartBar } from 'react-icons/fa';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
  	// const items = [<FaHome />, <FaFlag />, <FaRegChartBar />, <FaUser />];
   //  <IconContext.Provider value={{ className: "nav-icon" }} key={index}>
   //    {item}
   //  </IconContext.Provider>

    return (
      <div className="Nav">
        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => this.toggleMenu()}>
            <MenuIcon />
          </IconButton>
        <SwipeableDrawer
          open={this.state.menuOpen}
          onClose={() => this.toggleMenu()}
          onOpen={() => this.toggleMenu()}
        >
          <div role="presentation">
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default Nav;
