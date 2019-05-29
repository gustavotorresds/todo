import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Missions.scss';

import { setMissionFilter } from '../../../actions'

class Missions extends Component {
  handleClick(missionId) {
    if (this.props.missionFilter === missionId) {
      this.props.dispatch(setMissionFilter(null));
    } else {
      this.props.dispatch(setMissionFilter(missionId));
    }
  }

  render() {
    const { missions } = this.props;

    const missionElements = missions.map((mission, index) =>
      <div
        className={'mission'}
        key={index}
        onClick={() => this.handleClick(mission.id)}
        style={{backgroundColor: mission.color}}
      >
        {mission.name}
      </div>
    );

    return (
      <div className="missions-container">
        {missionElements}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  missions: state.missions,
  missionFilter: state.missionFilter
})

export default connect(
  mapStateToProps
)(Missions)
