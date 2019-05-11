import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FaHome, FaFlag, FaUser, FaRegChartBar } from 'react-icons/fa';

class Nav extends Component {
  render() {
  	const items = [<FaHome />, <FaFlag />, <FaRegChartBar />, <FaUser />];

    return (
      <div className="Nav">
      	<div className="items-container">
	      	{
	      		items.map(function(item, index) {
	      			return <IconContext.Provider value={{ className: "nav-icon" }} key={index}>
							  {item}
							</IconContext.Provider>
	      		})
	      	}
      	</div>
      </div>
    );
  }
}

export default Nav;
