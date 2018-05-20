import FeedContainer from './containers/FeedContainer';
import PostContainer from './containers/PostContainer';
import CommentPageContainer from './containers/CommentPageContainer';
import UserPageContainer from './containers/UserPageContainer';
import NotFound from './components/HelperComponents/NotFound';

const routes = [
  {
    path: '/:feedName(top|new|ask|show|jobs|best)?/:page([1-9][0-9]?)?',
    exact: true,
    component: FeedContainer,
  },
  {
    path: '/post/:id(\\d+)',
    component: PostContainer,
  },
  {
    path: '/comment/:id(\\d+)',
    component: CommentPageContainer,
  },
  {
    path: '/user/:username',
    component: UserPageContainer,
  },
  {
    component: NotFound,
  },

  // TODO: Figure out and add 404
];

export default routes;
