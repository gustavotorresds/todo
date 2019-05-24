import React, { Component } from 'react';
import { connect } from 'react-redux'

class Missions extends Component {
  state = {
    missions: [],
  };

  render() {
    const { missions } = this.props;

    const missionElements = missions.map((mission, index) =>
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

const mapStateToProps = state => ({
  missions: state.missions
})

export default connect(
  mapStateToProps
)(Missions)
