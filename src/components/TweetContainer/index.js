import React, { Component } from 'react';
import io from 'socket.io-client';
import Tweet from '../Tweet';
import './index.css';

class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    // initialize stream
    const socket = io.connect('http://sthobis.xyz:9001');
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
        <h1>TOLONG!</h1>
        <div className="Loading">
          <div />
        </div>
        {
          this.state.tweets.length > 0 &&
          <ul className="TweetList">
            {
              this.state.tweets.map((tweet, idx) => {
                return <li><Tweet data={tweet} key={idx} /></li>
              })
            }
          </ul>
        }
        <footer>
          <a href="https://github.com/sthobis/tolong">source</a>
        </footer>
      </div>
    );
  }
}

export default TweetContainer;