import React from 'react';
import * as time from '../utils/utils.time';
import { getExactTime } from '../utils/utils.time';
import commentIcon from '../images/icon-comment.svg'

const Entry = (props) => {
  return (
    <div className="entry">
      <header className="entry__title">
        <a className="entry__link" href="">
          Show HN: RoughJS – Create hand-drawn graphics using JavaScript
        </a>
        
        <small className="entry__hostname">(roughjs.com)</small>
      </header>
      
      <div className="entry__meta">
        <span className="entry__score">+ 88</span>
  
        <span className="entry__user">
          by <a className="entry__user-link" href="">fallingmeat</a>
        </span>
        
        <time className="entry__time" dateTime={time.getISOTime(1520884294)} title={getExactTime(1520884294)}>2 hours ago</time>
        
        <a className="entry__comments-link" href="" aria-label="32 comments">
          32
        </a>
      </div>
    </div>
  );
};

export default Entry;
