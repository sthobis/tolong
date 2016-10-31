import React, { Component } from 'react';
import style from './index.css';

class Tweet extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={style.TweetBox}>
        <img src={data.avatar} alt="Avatar" />
        <p>{data.body}</p>
        <p>{data.date}</p>
        <p><a href={'http://twitter.com/' + data.screenname}>@{data.screenname}</a></p>
      </div>
    );
  }
}

export default Tweet;
