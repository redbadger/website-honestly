// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import ReactGA from 'react-ga';

import Link from '../../components/link';
import styles from './styles.css';

import serverlessImg from './img/serverless.png';
import graphqlImg from './img/graphql.png';
import dockerImg from './img/docker.png';
import nodejsImg from './img/nodejs.png';
import reactImg from './img/react.png';
import elasticsearchImg from './img/elasticsearch.png';

type TechListItemProps = {
  name: string,
  imgSrc: string,
  plusSymbol?: boolean,
};

const trackTechLogosClicks = () =>
  ReactGA.event({
    category: 'Tech Icons',
    action: 'click',
    label: 'Technology',
  });

function TechListItem({ name, imgSrc, plusSymbol }: TechListItemProps) {
  return (
    <li className={styles.techListItem}>
      <figure className={styles.techItem}>
        <img alt={name + ' logo'} className={styles.techLogo} src={imgSrc} />
        <figcaption className={styles.techName}>{name}</figcaption>
      </figure>
      {plusSymbol && <img alt="" className={styles.techPlusSymbol} src={imgSrc} />}
    </li>
  );
}

export default function TechSlice() {
  return (
    <section className={styles.techSlice}>
      <h2 className={styles.heading}>We love tech. But we only use what’s right for the job.</h2>

      <p className={styles.projectsBlerb}>
        Here is a selection of what we’ve used on recent projects.
      </p>

      <ul className={styles.techList} onClick={trackTechLogosClicks}>
        <TechListItem name="Serverless" imgSrc={serverlessImg} />
        <TechListItem name="GraphQL" imgSrc={graphqlImg} />
        <TechListItem name="Docker" imgSrc={dockerImg} />
        <TechListItem name="NodeJS" imgSrc={nodejsImg} plusSymbol />
        <TechListItem name="React" imgSrc={reactImg} plusSymbol />
        <TechListItem name="Elasticsearch" imgSrc={elasticsearchImg} />
      </ul>
      <ul className={styles.techList} onClick={trackTechLogosClicks}>
        {/* replace icons when ready */}
        <TechListItem name="Serverless" imgSrc={serverlessImg} />
        <TechListItem name="GraphQL" imgSrc={graphqlImg} />
        <TechListItem name="Docker" imgSrc={dockerImg} />
        <TechListItem name="NodeJS" imgSrc={nodejsImg} plusSymbol />
        <TechListItem name="React" imgSrc={reactImg} plusSymbol />
        <TechListItem name="Elasticsearch" imgSrc={elasticsearchImg} />
      </ul>

      <Link className={styles.moreBtn} to="technology">
        More about the tech
      </Link>
    </section>
  );
}
