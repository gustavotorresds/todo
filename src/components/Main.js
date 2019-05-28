import React, { Component } from 'react';
import Add from './Add.js';
import Nav from './Nav.js';
import Missions from './Missions.js';
import Tasks from './Tasks.js';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  } 

  render() {
    return (
      <main>
        {/*<div className="App-header">Hi, Gustavo</div>*/}
         <AppBar position="static" color="default">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => this.toggleMenu()}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

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

        <Missions />
        <Tasks />
        <Add />
      </main>
    );
  }
}

export default Main;
