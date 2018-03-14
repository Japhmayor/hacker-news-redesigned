import React from 'react';
import * as time from '../utils/utils.time';
import { getExactTime } from '../utils/utils.time';




const Entry = (props) => {
  return (
    <div className="entry">
      <div className="entry__title">
        <a className="entry__link" href="">
          Show HN: RoughJS – Create hand-drawn graphics using JavaScript
        </a>
        
        <small className="entry__hostname">(roughjs.com)</small>
      </div>
      
      <div className="entry__meta">
        <time className="entry__time" dateTime={time.getISOTime(1520884294)} title={getExactTime(1520884294)}>2 hours ago</time>
        
        <span className="entry__user">
          by fallingmeat
        </span>
        
        <a className="entry__comments-link">32 comments</a>{/* Discuss, if no comments*/}
      </div>
    </div>
  );
};

export default Entry;
