import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FaHome } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaRegChartBar } from 'react-icons/fa';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      	<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
		  <div>
		    <FaHome />
		  </div>
		</IconContext.Provider>
		<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
		  <div>
		    <FaFlag />
		  </div>
		</IconContext.Provider>
		<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
		  <div>
		    <FaRegChartBar />
		  </div>
		</IconContext.Provider>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
		  <div>
		    <FaUser />
		  </div>
		</IconContext.Provider>
      </div>
    );
  }
}

export default Nav;
