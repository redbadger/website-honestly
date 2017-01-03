// @flow

import React, { PropTypes } from 'react';
import SwipeableViews from 'react-swipeable-views';
import cx from 'classnames';

import InlineSVG from 'svg-inline-react';

import styles from './styles.css';

import instagramIconSVG from './icons/instagram/instagram.svg';
import twitterIconSVG from './icons/twitter/twitter.svg';

import likeIconSVG from './icons/like/like.svg';
import retweetIconSVG from './icons/retweet/retweet.svg';
import commentIconSVG from './icons/comment/comment.svg';

const IntroCard = ({ nextCard }) => (
  <li className={styles.intro} onClick={nextCard}>
    <span>
      From our social feed
    </span>
  </li>
);

IntroCard.propTypes = {
  nextCard: PropTypes.func.isRequired,
};

const colours = [styles.blue, styles.purple, styles.green];
const Twitter = ({ handle, tweet, retweetCount, likeCount, index = 1 }) => (
  <li className={cx(styles.twitter, colours[index % 3])}>
    <div className={styles.handle}>
      <InlineSVG src={twitterIconSVG} className={styles.twitterIcon} />
      {handle}
    </div>
    <div className={styles.tweet}>
      {tweet}
    </div>
    <div className={styles.meta}>
      <span className={styles.retweets}>
        <InlineSVG src={retweetIconSVG} className={styles.icon} />
        {retweetCount}
      </span>
      <span className={styles.likes}>
        <InlineSVG src={likeIconSVG} className={styles.icon} />
        {likeCount}
      </span>
    </div>
  </li>
);

const Instagram = ({handle, image, alt, likeCount, commentCount}) => (
  <li className={styles.instagram}>
    <div className={styles.handle}>
      <InlineSVG src={instagramIconSVG} className={styles.instagramIcon} />
      {handle}
    </div>
    <img
      className={styles.image}
      alt={alt}
      src={image}
    />
    <div className={styles.meta}>
      <span className={styles.likes}>
        <InlineSVG src={likeIconSVG} className={styles.icon} />
        {likeCount}
      </span>
      <span className={styles.comments}>
        <InlineSVG src={commentIconSVG} className={styles.icon} />
        {commentCount}
      </span>
    </div>
  </li>
);

class SocialSlice extends React.Component {
  state = { tile: 0 };

  setTile = (tile : number) => this.setState({ tile })

  render() {
    return(
      <section className={styles.socialSlice}>
        <ul className={styles.cards}>
          {this.state.tile}
          <div className={styles.scrollRegion}>
            <SwipeableViews index={this.state.tile} onChangeIndex={this.setTile} slideStyle={{ transform: 'translate(-40px, 0)' }}>
              <IntroCard nextCard={this.setTile} />
              <Instagram
                handle="@redbadgerteam"
                image="https://cdn.zeplin.io/57c8297fc3cf63795b6a4520/assets/90B70B12-B358-48D5-BA5E-DCA61BEE2A03.png"
                alt="pic from the gram"
                likeCount={88}
                commentCount={88}
              />
              <Twitter
                handle="@redbadgerteam"
                tweet="What on earth is #git?! @nicollecastrog explains all in plain english here – http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
                retweetCount={88}
                likeCount={88}
                index={0}
              />
              <Instagram
                handle="@redbadgerteam"
                image="https://cdn.zeplin.io/57c8297fc3cf63795b6a4520/assets/908871A3-1D9D-4D96-85AA-A9B4D27804D3.png"
                alt="Hemingway"
                likeCount={88}
                commentCount={88}
              />
              <Twitter
                handle="@redbadgerteam"
                tweet="What on earth is #git?! @nicollecastrog explains all in plain english here – http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
                retweetCount={88}
                likeCount={88}
                index={1}
              />
            </SwipeableViews>
          </div>
        </ul>
      </section>
    );
  }
};

export default SocialSlice;
