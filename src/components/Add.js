import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { connect } from 'react-redux'
import { addTask } from '../actions'

const redTheme = createMuiTheme({ palette: { primary: red } });

class Add extends Component {
  handleCreate() {
    const { missionFilter } = this.props;
    console.log(missionFilter);
    this.props.dispatch(addTask("", missionFilter ? missionFilter : 2));
  }

  render() {
    return (
    	<div className="add-button">
    		<MuiThemeProvider theme={redTheme}>
			    <Fab color="primary" aria-label="Add">
			        <AddIcon onClick={() => this.handleCreate()} />
			    </Fab>
		    </MuiThemeProvider>
    	</div>
    );
  }
}

const mapStateToProps = state => ({
  missionFilter: state.missionFilter
})

export default connect(mapStateToProps)(Add);
