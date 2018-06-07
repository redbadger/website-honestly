// @flow
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import styles from './styles.css';
import IntroMobileTile from './intro-mobile-tile';
import IntroDesktopTile from './intro-desktop-tile';
import InstagramTile from './instagram-tile';
import TwitterTile from './twitter-tile';
import type { Tweet, InstagramPost } from '../../../types/';
import ClientOnly from '../../../components/clientOnly';

type SocialSliceProps = {
  tweets: Array<Tweet>,
  instagramPosts: Array<InstagramPost>,
};

type SocialSliceState = {
  tile: number,
  totalTiles: number,
  viewWidth: number,
};

class SocialSlice extends React.Component<SocialSliceProps, SocialSliceState> {
  componentWillMount() {
    this.setState({
      tile: 0,
      totalTiles: this.props.instagramPosts.length + (this.props.tweets.length - 1),
      viewWidth: 0,
    });
  }

  componentDidMount() {
    this.setState({ viewWidth: window.innerWidth });
    window.addEventListener('resize', this.updateViewWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewWidth);
  }

  setTile = (tile: number) => this.setState({ tile });

  /**
   * Called on every browser resize this updates the width and determines
   * the swipableTileTotal tile total
   */
  updateViewWidth = () => {
    const newWidth = window.innerWidth;
    this.setState({ viewWidth: newWidth });
  };

  /**
   * Calulate the number of total tiles that can be swiped
   * If we have a view width larger thatn the intro tile + 1 we would get
   * black space at the end. By returning a lower number than total tiles this is prevented
   */
  calculateSwipableTotal = () => {
    const { viewWidth, totalTiles } = this.state;

    if (viewWidth > this.tileSize * 2) {
      // Adjust for intro slide + 1 slide;
      const newTileSize = this.tileSize * 2;
      const adjustedWidth = viewWidth - newTileSize;
      // Calculate the number of tiles that are in view and then remove that from the total tiles
      const tilesToRemove = Math.floor(adjustedWidth / this.tileSize);
      return totalTiles - tilesToRemove;
    }
    return totalTiles;
  };
  prevTile = () => {
    const prevTile = this.state.tile - 1;
    if (prevTile < 0) {
      return;
    }
    this.setState({ tile: prevTile });
  };
  nextTile = () => {
    const nextTile = this.state.tile + 1;
    const swipableTotal = this.calculateSwipableTotal();
    if (nextTile > swipableTotal) {
      return;
    }
    this.setState({ tile: nextTile });
  };
  props: SocialSliceProps;
  /** This is the tile width used for calculations - also the value in the CSS styling */
  tileSize = 350;

  /**
   * Calculate the padding that should be added onto the swipe container
   * to ensure that the correct distance is swiped. This is dynamic and
   * responds to a browser resize. The calculation is based on
   * the intro tile + one tile + padding offset of 60
   */
  calculateSwipePadding() {
    const { viewWidth } = this.state;
    const newTileSize = this.tileSize * 2;
    return viewWidth - newTileSize;
  }
  /** As above but for small screen */
  calculateMobileSwipePadding() {
    const { viewWidth } = this.state;
    return viewWidth - this.tileSize;
  }

  renderTiles = () => {
    const { tweets, instagramPosts } = this.props;
    const data: Array<Tweet | InstagramPost> = [];
    if (tweets) {
      data.push(...tweets);
    }

    if (instagramPosts) {
      data.push(...instagramPosts);
    }

    if (data.length === 0) {
      return null;
    }

    return data.sort((a, b) => new Date(b.created) - new Date(a.created)).map((row, index) => {
      return row.image ? (
        <InstagramTile key={row.created} post={row} index={index} />
      ) : (
        <TwitterTile key={row.created} tweet={row} index={index} />
      );
    });
  };

  render() {
    const swipePadding = this.calculateSwipePadding();
    const mobileSwipePadding = this.calculateMobileSwipePadding();

    return (
      <section className={styles.socialSlice}>
        <ClientOnly>
          {/** Desktop View */}
          <div className={styles.desktopView}>
            <IntroDesktopTile
              nextCard={this.nextTile}
              prevCard={this.prevTile}
              currentTile={this.state.tile}
              totalSwipableTiles={this.calculateSwipableTotal()}
            />
            <SwipeableViews
              index={this.state.tile}
              onChangeIndex={this.setTile}
              style={{ paddingRight: swipePadding }}
              slideStyle={{ width: 350, height: 525 }}
            >
              {this.renderTiles()}
            </SwipeableViews>
          </div>
          {/** Mobile View */}
          <div className={styles.mobileView}>
            <SwipeableViews
              index={this.state.tile}
              onChangeIndex={this.setTile}
              style={{ paddingRight: mobileSwipePadding }}
              slideStyle={{ maxWidth: 415 }}
            >
              <IntroMobileTile />
              {this.renderTiles()}
            </SwipeableViews>
          </div>
        </ClientOnly>
        {/** No Script View */}
        <noscript>
          <div className={styles.noscript}>
            <IntroDesktopTile
              nextCard={this.nextTile}
              prevCard={this.prevTile}
              currentTile={this.state.tile}
              totalSwipableTiles={this.calculateSwipableTotal()}
            />
            {this.renderTiles()}
          </div>
        </noscript>
      </section>
    );
  }
}

export default SocialSlice;
