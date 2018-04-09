// @flow
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import type { ComponentType } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

const mailToURL = 'mailto:hello@red-badger.com?Subject=Can%20you%20help%20me%20with%20...';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'ContactUsForm',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

type State = {
 isHovered: boolean,
}

type ContainerProps = {
  isHovered: boolean,
  onHover: Function,
  onBlur: Function,
}

type ChecklistType = ({
  listItems: Array<string>,
  title: string,
  cta: string,
  contactEmailAddress: string
}) => ComponentType<ContainerProps>;

const Checklist: ChecklistType = ({ 
  listItems, 
  title, 
  cta, 
  contactEmailAddress,
}) => ({isHovered, onHover, onBlur}: ContainerProps)=> (
  <section className={styles.contactUsContainer} id="contactUs">
    <h2 className={styles.header}>{title}</h2>
    <div className={styles.contentContainer}>
      <ul className={styles.list}>
        {listItems.map((item, index) => <li key={index} className={styles.item}>{item}</li>)}
      </ul>
      <div className={cx(styles.imgContainer, isHovered ? 'isHovered' : '')} />
    </div>
    <div>
      <a
        href={mailToURL}
        className={styles.mailToLink}
        onMouseEnter={onHover}
        onMouseLeave={onBlur}
        onClick={trackAnalytics('ContactUsForm - ButtonClicked')}
      >
       {cta}
      </a>
      <span className={styles.talkToUs}>{contactEmailAddress}</span>
    </div>
  </section>
)

const genericChecklistText = {
  listItems: [
    'Create & validate new ideas',
    'Deliver great quality products & services, fast',
    'Be bold with technology',
    'Be more customer centric',
    'Improve efficiency with lean practices',
    'Build capability & confidence',
  ],
  title: 'We can help you',
  cta: 'Send an email',
  contactEmailAddress: 'hello@red-badger.com',
}

const GenericChecklist = Checklist({...genericChecklistText}) // eslint-disable-line new-cap
// const TechPageChecklist = Checklist({...techPageChecklistText}) // eslint-disable-line new-cap

type TestProps = {}
class ChecklistContainer extends Component<TestProps, State> {
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
    return <GenericChecklist isHovered={this.state.isHovered} onHover={this.onHover} onBlur={this.onBlur} />
  }
}

export default ChecklistContainer;

