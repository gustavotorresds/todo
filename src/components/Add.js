import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const redTheme = createMuiTheme({ palette: { primary: red } });

class Add extends Component {
  render() {
    return (
    	<div className="add-button">
    		<MuiThemeProvider theme={redTheme}>
			    <Fab color="primary" aria-label="Add">
			        <AddIcon />
			    </Fab>
		    </MuiThemeProvider>
    	</div>
    );
  }
}

export default Add;
