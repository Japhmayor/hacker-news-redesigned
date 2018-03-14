import React from 'react';
import * as timeUtils from '../utils/utils.time';
import { getExactTime } from '../utils/utils.time';
import commentIcon from '../images/icon-comment.svg'
import getHostName from '../utils/getHostname';
import { getTimePassed } from '../utils/utils.time';

const Entry = ({by, score, time, title, url, descendants, text}) => {
  // type: story
  // type: job ( just title and date)
  // type: poll (maybe)
  
  
  // When the entry doesn't have `url`, but has `text` instead (ask, show, job)
  // url should point to the entry in that case, not to outside link.
 
  return (
    <div className="entry">
      <header className="entry__title">
        <a className="entry__link" href={url}>
          {title}
        </a>
        
        <small className="entry__hostname">({getHostName(url)})</small> {/* Don't render if show/ask */}
      </header>
      
      <div className="entry__meta">
        <span className="entry__score">+ {score}</span>
  
        <span className="entry__user">
          by <a className="entry__user-link" href={`/${by}`}>{by}</a>
        </span>
        
        <time className="entry__time" dateTime={timeUtils.getISOTime(time)} title={getExactTime(time)}>{getTimePassed(time)}</time>
        
        <a className="entry__comments-link" href="" aria-label="32 comments">
          {descendants}
        </a>
      </div>
    </div>
  );
};

export default Entry;
