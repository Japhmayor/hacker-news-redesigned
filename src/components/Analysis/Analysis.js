import React from 'react';
import data from '../../topData';
import * as styles from './Analysis.scss';
import orderBy from 'lodash/orderBy'

const posts = data.filter(post => post.totalComments !== null);

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
    console.log(posts.length);

    return (
      <table className={styles.Analysis}>
        <thead>
        <tr>
          <th onClick={() => this.changeOrder('score')}>Score</th>
          <th onClick={() => this.changeOrder('totalComments')}>Total Comments</th>
          <th onClick={() => this.changeOrder('topLevelComments')}>Top-level Comments</th>
        </tr>
        </thead>

        <tbody>
        {orderBy(posts, [this.state.sortBy], [this.state.order]).map(post => (
          <tr key={post.id}>
            <td>{post.score}</td>
            <td>{post.totalComments}</td>
            <td>{post.topLevelComments}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
}




export default Analysis;
