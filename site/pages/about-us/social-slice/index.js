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

class SocialSlice extends React.Component {
  state = { tile: 0 };

  setTile = (tile: number) => this.setState({ tile });
  prevTile = () => {
    const prevTileIndex = this.state.tile - 1;
    if (prevTileIndex < 0) {
      return;
    }
    this.setState({ tile: prevTileIndex });
  }
  nextTile = () => {
    const nextTileIndex = this.state.tile - 1;
    if (nextTileIndex > 9) {
      return;
    }
    this.setState({ tile: this.state.tile + 1 });
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
        <div className={styles.cards}>
          <IntroDesktopTile prevCard={this.prevTile} nextCard={this.nextTile} />
          <SwipeableViews index={this.state.tile} onChangeIndex={this.setTile} slideStyle={{ transform: 'translate(0px, 0)', width: 350 }}>
            <IntroMobileTile />
            {this.renderTiles()}
          </SwipeableViews>
        </div>
      </section>
    );
  }
}

export default SocialSlice;
