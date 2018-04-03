// @flow
import React from 'react';
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
};

function TechListItem({ name, imgSrc }: TechListItemProps) {
  return (
    <li className={styles.techListItem}>
      <figure className={styles.techItem}>
        <img alt={name + ' logo'} className={styles.techLogo} src={imgSrc} />
        <figcaption className={styles.techName}>{name}</figcaption>
      </figure>
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

      <ul className={styles.techList}>
        <TechListItem name="Serverless" imgSrc={serverlessImg} />
        <TechListItem name="GraphQL" imgSrc={graphqlImg} />
        <TechListItem name="Docker" imgSrc={dockerImg} />
        <TechListItem name="NodeJS" imgSrc={nodejsImg} />
        <TechListItem name="React" imgSrc={reactImg} />
        <TechListItem name="Elasticsearch" imgSrc={elasticsearchImg} />
      </ul>

      <Link className={styles.moreBtn} to="technology">
        More about the tech
      </Link>
    </section>
  );
}
