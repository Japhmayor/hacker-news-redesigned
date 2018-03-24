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
    const { feed = 'top', page = 1 } = this.props.match.params;
    const { feed: prevFeed = 'top', page: prevPage = 1 } = prevProps.match.params;
  
    if (feed !== prevFeed || page !== prevPage) {
      this.update();
    }
  }
  
  update = () => {
    this.setState({
      loading: true
    });
    
    const { feed = 'top', page = 1 } = this.props.match.params;
    
    getFeed(feed, page, 5)
      .then(result => {
        this.setState({
          loading: false,
          entries: result.entries,
          entryCount: result.entryCount
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };
  
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
