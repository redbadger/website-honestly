import React, { Component } from 'react';
import Container from '../../components/container';
import Root from '../root';
import typography from '../../components/typography/style.css';
import image from './missing_badger.png';
import styles from './style.css';

export default class ErrorPage extends Component {
  static propTypes = {
    status: React.PropTypes.number,
  };

  render() {
    let text;

    if (this.props.status === 500) {
      text = (
        <div>
          <p>{"Our server seems to be having a little strop."}</p>
          <p>{"Please try reloading the page or come back later."}</p>
        </div>
      );
    } else {
      text = (
        <div>
          <p>{"The page you’re looking for seems to have gone walkies."}</p>
          <p>{"Please use the navigation above to hunt it down."}</p>
        </div>
      );
    }

    return (
      <Root background="error">
        <Container>
          <div className={styles.wrapper}>
            <h1 className={typography.h1}>Oops, sorry!</h1>
            <img alt="Missing Badger" src={image} />
            {text}
          </div>
        </Container>
      </Root>
    );
  }
}
