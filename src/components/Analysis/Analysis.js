import React from 'react';
import orderBy from 'lodash/orderBy'
import sumBy from 'lodash/sumBy'
import data from '../../topData';
import * as styles from './Analysis.scss';

const posts = data.filter(post => post.totalComments !== null && post.totalComments > 15);

class Analysis extends React.Component {
  state = {
    sortBy: 'score',
    order: 'desc'
  };

  changeOrder = (sortBy) => {
    if (sortBy === this.state.sortBy) {
      this.setState({
        order: this.state.order === 'asc' ? 'desc' : 'asc'
      });
    }
    else {
      this.setState({sortBy});
    }
  };

  render() {
    return (
      <table className={styles.Analysis}>
        <thead>
        <tr>
          <th>ID</th>
          <th onClick={() => this.changeOrder('score')}>Score</th>
          <th onClick={() => this.changeOrder('totalComments')}>Total Comments</th>
          <th onClick={() => this.changeOrder('topLevelComments')}>Top-level Comments</th>
          <th>Replies per top-level comment</th>
          <th>Comment/Score ratio</th>
        </tr>
        </thead>

        <tbody>
        {orderBy(posts, [this.state.sortBy], [this.state.order]).map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.score}</td>
            <td>{post.totalComments}</td>
            <td>{post.topLevelComments}</td>
            <td>{Math.round(post.totalComments / post.topLevelComments)}</td>
            <td>{(post.totalComments / post.score).toPrecision(1)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
}




export default Analysis;
