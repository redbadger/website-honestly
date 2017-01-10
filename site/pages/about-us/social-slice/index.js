// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import styles from './styles.css';
import IntroMobileTile from './intro-mobile-tile';
import IntroDesktopTile from './intro-desktop-tile';
import InstagramTile from './instagram-tile';
import TwitterTile from './twitter-tile';
import type { Tweet, InstagramPost } from '../../../types/';

type SocialSliceProps = {
  tweets: Array<Tweet>,
  instagramPosts: Array<InstagramPost>,
}

type SocialSliceState = {
  tile: number;
  totalTiles: number;
}

class SocialSlice extends React.Component {
  state: SocialSliceState;
  componentWillMount() {
    this.state = {
      tile: 0,
      totalTiles: (this.props.instagramPosts.length + this.props.tweets.length) - 1,
    };
  }

  setTile = (tile: number) => this.setState({ tile });
  prevTile = () => {
    const prevTile = this.state.tile - 1;
    if (prevTile < 0) {
      return;
    }
    this.setState({ tile: prevTile });
  }
  nextTile = () => {
    const nextTile = this.state.tile + 1;
    if (nextTile > this.state.totalTiles) {
      return;
    }
    this.setState({ tile: nextTile });
  }
  props: SocialSliceProps;

  renderTiles = () => {
    const { tweets, instagramPosts } = this.props;
    const data: Array<Tweet> | Array<InstagramPost> = [];
    if (tweets) {
      data.push(...tweets);
    }

    if (instagramPosts) {
      data.push(...instagramPosts);
    }

    if (data.length === 0) {
      return null;
    }

    return data.sort(o => new Date(o.created)).map((row, index) => {
      return row.image
        ? <InstagramTile post={row} index={index} key={index} />
        : <TwitterTile tweet={row} index={index} key={index} />;
    });
  }

  render() {
    return (
      <section className={styles.socialSlice}>
        <div className={styles.desktopView}>
          <IntroDesktopTile nextCard={this.nextTile} prevCard={this.prevTile} />
          <SwipeableViews
            index={this.state.tile}
            onChangeIndex={this.setTile}
            style={{ paddingRight: '15%' }}
            slideStyle={{ width: 350 }}
            >
            {this.renderTiles()}
          </SwipeableViews>
        </div>
        <div className={styles.mobileView}>
          <SwipeableViews
            index={this.state.tile}
            onChangeIndex={this.setTile}
            style={{ paddingRight: '15%' }}
            slideStyle={{ maxWidth: 415 }}
            >
            <IntroMobileTile />
            {this.renderTiles()}
          </SwipeableViews>
        </div>
      </section>
    );
  }
}

export default SocialSlice;
