import React, { Component } from 'react';
import io from 'socket.io-client';
import Tweet from '../Tweet';
import style from './index.css';

class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [{"twid":793117548996800500,"active":false,"author":"Mohamad Asry","avatar":"http://pbs.twimg.com/profile_images/789505557421928448/TmFsQwe9_normal.jpg","body":"RT @nrsarahsenrose: ada sesapa kenal?  kesian makcik ni 😭 tolong viralkan @KuantanTV https://t.co/z9pGYxWYZk","date":"Mon Oct 31 15:48:53 +0000 2016","screenname":"NiCeGuYz_"}]
    };
  }
  componentDidMount() {
    const socket = io.connect('http://localhost:9000');
    socket.on('tweet', (data) => {
      this.addTweet(data);
    });
  }
  addTweet(tweet) {
    let newTweets = this.state.tweets;
    if (newTweets.length === 10) {
      newTweets.pop();
    }
    newTweets.unshift(tweet);
    this.setState({tweets: newTweets});
  }
  render() {
    return (
      <div className="App">
        {
          this.state.tweets.map((tweet, idx) => {
            return <Tweet data={tweet} key={idx} />
          })
        }
      </div>
    );
  }
}

export default TweetContainer;