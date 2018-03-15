import styled from 'styled-components';
import commentIcon from '../../images/icon-comment.svg'
import { colors } from '../../styles/settings/colors';

const EntryCommentLink = styled.a`
  display: block;
  position: relative;
  margin-left: auto;
  color: ${colors.neutral['30']};
  text-decoration: none;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &::after {
    vertical-align: middle;
    display: inline-block;
    width: 24px;
    height: 21px;
    margin-left: 8px;
    background-image: url(${commentIcon});
    content: '';
  }

  &:hover {
    opacity: 0.8;
    color: ${colors.neutral['40']};
  }

  &:active {
    opacity: 0.6;
  }
`;


export default EntryCommentLink;
