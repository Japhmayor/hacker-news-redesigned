import React from 'react';
import EntryList from '../components/EntryList'
import dummyData from '../dummyData/feed';
import '../HNApi';
import { ENTRIES_PER_PAGE, FEED_ENDPOINTS } from '../constants';
import { getFeed } from '../HNApi';

class EntryListContainer extends React.Component {
  state = {
    entries: []
  };
  
  componentDidMount() {
    console.log(this.props);
    const feed = this.props.match && this.props.match.params.feed || 'top';
    const page = this.props.match && this.props.match.params.page || '1';
    
    getFeed(feed, page, ENTRIES_PER_PAGE)
      .then(entries => {
        this.setState({
          entries
        });
      });
  }
  
  render() {
    return <EntryList entries={this.state.entries} />
  }
}


export default EntryListContainer;
