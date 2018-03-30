import React from 'react';
import PropTypes from 'prop-types';
import { getEntry } from '../HNApi';
import { Poll } from '../components/Poll';
import PollPlaceholder from '../components/Poll/PollPlaceholder';
import Repeat from '../components/Repeat';

class PollContainer extends React.Component {
  static propTypes = {
    pollIDs: PropTypes.arrayOf(PropTypes.number).isRequired
  };
  
  state = {
    pollOptions: [],
    loading: true,
    error: false,
  };
  
  componentDidMount() {
    this.update();
  }
  
  update = () => {
    const ids = this.props.pollIDs;
    
    Promise.all(ids.map(id => getEntry(id)))
      .then(pollOptions => pollOptions.filter(option => !option.deleted))
      .then(pollOptions => pollOptions.sort((a, b) => b.score - a.score))
      .then(pollOptions => this.setState({ pollOptions, loading: false }))
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };
  
  render() {
    if (this.state.loading) {
      return (
      <Repeat times={this.props.pollIDs.length}>
        <PollPlaceholder/>
      </Repeat>)
    }
    
    if (this.state.error) {
      return ('Uh oh, no polls for today.')
    }
    
    return <Poll options={this.state.pollOptions} />
  }
}

export default PollContainer;
