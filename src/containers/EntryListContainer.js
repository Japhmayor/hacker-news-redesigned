import React from 'react';
import PropTypes from 'prop-types';
import EntryList from '../components/EntryList'
import { getFeed } from '../HNApi';
import { ENTRIES_PER_PAGE } from '../constants';
import EntryPlaceholder from '../components/Entry/EntryPlaceholder';
import Repeat from '../components/Repeat';

class EntryListContainer extends React.Component {
  state = {
    entries: [],
    error: false,
    loading: true,
    entryCount: 0,
  };
  
  componentDidMount() {
    this.update();
  }
  
  componentDidUpdate(prevProps) {
    const { feed = 'top', page = '1' } = this.props.match.params;
    const { feed: prevFeed = 'top', page: prevPage = '1' } = prevProps.match.params;
    
    if (feed !== prevFeed || page !== prevPage) {
      this.setState({
        loading: true
      });
  
      this.update();
    }
  }
  
  update = () => { // TODO: Not a great name for this function. Rethink.
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
    if (this.state.error) {
      return <div>Something went wrong. Please try again/*TODO: Link/Button?*/</div>
    }
  
    if (this.state.loading) {
      return (
        <Repeat times={ENTRIES_PER_PAGE}>
          <EntryPlaceholder/>
        </Repeat>
      );
    }
    
    return <EntryList
      entries={this.state.entries}
      entryCount={this.state.entryCount}
      page={this.props.match.params.page}
      feed={this.props.match.params.feed}
      loading={this.state.loading}
    />
  }
}

EntryListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
      feed: PropTypes.string,
    })
  }).isRequired
};

export default EntryListContainer;
