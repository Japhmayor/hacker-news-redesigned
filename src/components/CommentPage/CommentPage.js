import React, { Fragment } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { fontSizeSmall, fontWeightMedium, h3FontSize } from '../../styles/settings/typography';
import { colors } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/spacing';
import Comment from '../Comment/Comment';


const CommentPageTitle = styled.h1` // TODO: Move
  margin-bottom: ${spacing(8)};
  padding-bottom: ${spacing(4)};
  font-size: ${h3FontSize};
  color: ${rgba(colors.neutral['10'], 0.8)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${colors.neutral['90']};
  
  small {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightMedium};
    color: ${colors.neutral['40']};
    margin-right: 1ch;
  }
`;

const CommentPage = (props) => (
  <Fragment>
    <CommentPageTitle> {/* TODO: Should be a link to the post.*/}
      <small>Comment thread in:</small>
      {props.parentPostTitle}
    </CommentPageTitle>

    <Comment {...props} />
  </Fragment>
);

export default CommentPage;

// TODO: PropTypes
