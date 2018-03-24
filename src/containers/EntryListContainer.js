import React from 'react';
import EntryList from '../components/EntryList'
import { getFeed } from '../HNApi';

class EntryListContainer extends React.Component {
  state = {
    entries: [],
    error: false,
    loading: true,
    entryCount: 0
  };
  
  componentDidMount() {
    this.update();
  }
  
  componentDidUpdate(prevProps) {
    const { feed = 'top', page = '1' } = this.props.match.params;
    const { feed: prevFeed = 'top', page: prevPage = '1' } = prevProps.match.params;
  
    if (feed !== prevFeed || page !== prevPage) {
      this.update();
    }
  }
  
  update = () => {
    this.setState({
      loading: true
    });
    
    const { feed = 'top', page = '1' } = this.props.match.params;
    
    getFeed(feed, page)
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
    
    else {
      return <EntryList
        entries={this.state.entries}
        entryCount={this.state.entryCount}
        page={this.props.match.params.page}
        feed={this.props.match.params.feed}
      />
    }
  }
}


export default EntryListContainer;
