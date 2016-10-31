import React, { Component } from 'react';
import moment from 'moment';
import { parseURL, parseUsername, parseHashtag } from '../../utils/tweetParser';
import './index.css';

class Tweet extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="TweetBox">
        <img className="avatar" src={data.avatar} alt="Avatar" />
        <div className="meta">
          <a className="meta__author" href={'http://twitter.com/' + data.screenname}>{data.author}</a>
          <span className="meta__screenname">@{data.screenname}</span>
          <span className="meta__timestamp">{moment(data.date).fromNow(true) + ' ago'}</span>
        </div>
        <p dangerouslySetInnerHTML={{__html: parseHashtag(parseUsername(parseURL(data.body)))}} />
      </div>
    );
  }
}

export default Tweet;
