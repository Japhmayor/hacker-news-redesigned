import React, { Fragment } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { fontSizeSmall, fontWeightMedium, h3FontSize } from '../../styles-old/settings/typography';
import { colors } from '../../styles-old/settings/colors';
import { spacing } from '../../styles-old/settings/spacing';
import Comment from '../Comment/Comment';
import * as styles from './CommentPage.scss';

const CommentPage = (props) => (
  <Fragment>
    <h1 className={styles.CommentPageTitle}> {/* TODO: Should be a link to the post.*/}
      <small>Comment thread in:</small>
      {props.parentPostTitle}
    </h1>

    <Comment {...props} />
  </Fragment>
);

export default CommentPage;

// TODO: PropTypes
