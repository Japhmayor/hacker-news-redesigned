import React, { Fragment } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { fontSizeSmall, fontWeightMedium, h3FontSize } from '../../styles/settings/typography';
import { colors } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/spacing';


const CommentPageTitle = styled.h1`
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid ${colors.neutral['90']};
  font-size: ${h3FontSize};
  color: ${rgba(colors.neutral['10'], 0.8)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  small {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightMedium};
    color: ${colors.neutral['40']};
    margin-right: 1ch;
  }
`;



const CommentPage = ({ id, type, text, time, author, deleted, parentPostID, parentPostTitle }) => {
  console.log(parentPostTitle);
  
  return (
    <Fragment>
      <CommentPageTitle>
        <small>Comment thread in:</small>
        {parentPostTitle}
      </CommentPageTitle>
    </Fragment>
  );
};

export default CommentPage;


