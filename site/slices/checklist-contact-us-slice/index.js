// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import logAmplitudeEvent from '../../tracking/amplitude';

const cx = classnames.bind(styles);

const mailToURL = 'mailto:hello@red-badger.com?Subject=Can%20you%20help%20me%20with%20...';

const trackAnalytics = () => () => {
  logAmplitudeEvent('CLICK CONTACT US', { type: 'email', subject: 'help' });
};

type State = {
  isHovered: boolean,
};

type Props = {
  cta?: string,
  contactEmailAddress?: string,
  isHovered: boolean,
  listItems: Array<string>,
  onHover: () => void,
  onBlur: () => void,
  title?: string,
};

const Checklist = ({
  cta = 'Send an email',
  contactEmailAddress = 'hello@red-badger.com',
  isHovered,
  listItems = [
    'Create & validate new ideas',
    'Deliver great quality products & services, fast',
    'Be bold with technology',
    'Be more customer centric',
    'Improve efficiency with lean practices',
    'Build capability & confidence',
  ],
  onHover,
  onBlur,
  title = 'We can help you',
}: Props) => (
  <section className={styles.contactUsContainer} id="contactUs">
    <h2 className={styles.header}>{title}</h2>
    <div className={styles.contentContainer}>
      <ul className={styles.list}>
        {listItems.map(item => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <div className={cx(styles.imgContainer, isHovered ? 'isHovered' : '')} />
    </div>
    <div>
      <a
        href={mailToURL}
        className={styles.mailToLink}
        onMouseEnter={onHover}
        onMouseLeave={onBlur}
        onClick={trackAnalytics()}
      >
        {cta}
      </a>
      <span className={styles.talkToUs}>{contactEmailAddress}</span>
    </div>
  </section>
);

type WithStateProps = {};
function withState(WrappedComponent, text) {
  return class extends Component<WithStateProps, State> {
    state = {
      isHovered: false,
    };

    onHover = () => {
      this.setState({
        isHovered: true,
      });
    };

    onBlur = () => {
      this.setState({
        isHovered: false,
      });
    };

    render() {
      return (
        <WrappedComponent
          isHovered={this.state.isHovered}
          onHover={this.onHover}
          onBlur={this.onBlur}
          {...text}
        />
      );
    }
  };
}

const GenericChecklist = withState(Checklist);

const techListItems = [
  'Navigate the open source revolution',
  'Choose the right tech for the job',
  'Adopt meticulous engineering practices',
  'Enable continuous deployment',
  'Increase speed to market',
  'Create value for your customers',
];
const TechChecklist = withState(Checklist, { listItems: techListItems });

export default GenericChecklist;
export { TechChecklist };
