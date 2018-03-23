import React from 'react';
import EntryList from '../components/EntryList'
import { ENTRIES_PER_PAGE } from '../constants';
import { getFeed } from '../HNApi';

class EntryListContainer extends React.Component {
  state = {
    entries: [],
    error: false,
    loading: true
  };
  
  componentDidMount() {
    this.update();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.feed !== this.props.match.params.feed) {
      this.update();
    }
  }
  
  update = () => {
    this.setState({
      loading: true
    });
    
    const {feed = 'top', page = 1} = this.props.match.params;
  
    console.log(feed, page);
    
    getFeed(feed, page)
      .then(entries => {
        this.setState({
          loading: false,
          entries
        });
      });
  }
  
  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    else if (this.state.error) {
      return <div>Something went wrong. Please try again/*TODO: Link/Button?*/</div>
    }
    return <EntryList entries={this.state.entries} />
  }
}


export default EntryListContainer;
