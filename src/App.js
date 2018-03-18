import React, { Component, Fragment } from 'react';
import Header from './components/Header/';
import Main from './components/Main';
import EntryList from './components/EntryList/';
import Post from './components/Post/Post';


const dummyPost = {
  "author": "coreyp_1",
  "commentCount": 29,
  "id": 16572857,
  "kids": [16573075, 16574268, 16584906, 16573771, 16573981, 16573703, 16573830, 16574447, 16573812, 16576606],
  "score": 15,
  "text": "We have long known that Walmart is tracking your purchases, and that they are trying to compete with Amazon.<p>Now, they will share your personal, in-store purchases with whomever is able to see your browser window.<p>I found this out when I walked out of the room &amp; a friend got bored and decided to use my laptop to find who was selling a specific amiibo, and when I came into the room, he asked, &quot;hey, why did you buy XYZ?&quot;.  XYZ was just a food item, but this was <i>CREEPY</i>, that walmart was showing last week&#x27;s in-store purchase <i>ONLINE</i>, without my permission!<p>I had not visited the walmart.com website in a LONG time, so I most certainly didn&#x27;t expect to still be logged in.  But, more importantly, I didn&#x27;t expect my private purchase history to be laid out publicly, either, on the main walmart.com front page.  The most important thing is, though, <i>WHY CAN&#x27;T I TURN THIS OFF?!?</i><p>I turned off &quot;Personalized Experience&quot; under &quot;Your Account &gt; Communications and Privacy&quot;, but the &quot;Ready to reorder?&quot; block is still on the front page.<p><i>Any ideas of what I should do next?</i>",
  "time": 1520900220,
  "title": "Walmart.com shows your in-store purchases whether you like it or not",
  "type": "story"
};


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main>
          {/*<EntryList/>*/}
          <Post {...dummyPost}/>
        </Main>
      </Fragment>
    );
  }
}

export default App;
