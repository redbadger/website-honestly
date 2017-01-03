// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import styles from './styles.css';
import Instagram from './instagram-tile';
import Twitter from './twitter-tile';
import IntroMobileTile from './intro-tile';


class SocialSlice extends React.Component {
  state = { tile: 0 };

  setTile = (tile: number) => this.setState({ tile });
  prevTile = () => this.setState({ tile: this.state.tile - 1 });
  nextTile = () => this.setState({ tile: this.state.tile + 1 });

  render() {
    return (
      <section className={styles.socialSlice}>
        <ul className={styles.cards}>
          {this.state.tile}
          <div className={styles.scrollRegion}>
            <SwipeableViews index={this.state.tile} onChangeIndex={this.setTile} slideStyle={{ transform: 'translate(-40px, 0)' }}>
              <IntroMobileTile prevCard={this.prevTile} nextCard={this.nextTile} />
              <Instagram
                handle="@redbadgerteam"
                image="https://cdn.zeplin.io/57c8297fc3cf63795b6a4520/assets/90B70B12-B358-48D5-BA5E-DCA61BEE2A03.png"
                alt="pic from the gram"
                likeCount={88}
                commentCount={88}
              />
              <Twitter
                handle="@redbadgerteam"
                tweet="What on earth is #git?! @nicollecastrog explains all in plain english here –
                http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
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
                tweet="What on earth is #git?! @nicollecastrog explains all in plain english here –
                http://bit.ly/2gWDcyk #versioncontrol #techexplained #github"
                retweetCount={88}
                likeCount={88}
                index={1}
              />
            </SwipeableViews>
          </div>
        </ul>
      </section >
    );
  }
}

export default SocialSlice;
