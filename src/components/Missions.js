import React, { Component } from 'react';

class Missions extends Component {
  render() {
    const missionTags = [
      {name: 'Edu', color: 'green'},
      {name: 'Mis', color: 'yellow'},
      {name: 'Hea', color: 'purple'}
    ];

    const missionElements = missionTags.map((mission, index) =>
      <div className={'mission ' + mission.color} key={index}>
          {mission.name}
      </div>
    );

    return (
      <div className="missions-container">
        {missionElements}

        <div className={'mission light-grey'}>
          New
        </div>
      </div>
    );
  }
}

export default Missions;
