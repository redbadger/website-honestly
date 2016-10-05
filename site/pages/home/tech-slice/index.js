import React, { PropTypes } from 'react';
import styles from './styles.css';

import serverlessImg from './img/serverless.png';
import graphqlImg from './img/graphql.png';
import dockerImg from './img/docker.png';
import nodejsImg from './img/nodejs.png';
import reactImg from './img/react.png';
import elasticsearchImg from './img/elasticsearch.png';

function TechListItem({ name, imgSrc }) {
  return (
    <li className={styles.techListItem}>
      <figure className={styles.techItem} >
        <img alt={name + ' logo'} className={styles.techLogo} src={imgSrc} />
        <figcaption className={styles.techName} >
          {name}
        </figcaption>
      </figure>
    </li>
  );
}

TechListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};


export default function TechSlice() {
  return (
    <section className={styles.techSlice}>
      <h2 className={styles.heading}>
        We love tech. But we only use what’s right for the job.
      </h2>

      <p className={styles.projectsBlerb}>
        Here is a selection of what we've used on recent projects.
      </p>

      <ul className={styles.techList}>
        <TechListItem name="Serverless" imgSrc={serverlessImg} />
        <TechListItem name="GraphQL" imgSrc={graphqlImg} />
        <TechListItem name="Docker" imgSrc={dockerImg} />
        <TechListItem name="NodeJS" imgSrc={nodejsImg} />
        <TechListItem name="React" imgSrc={reactImg} />
        <TechListItem name="Elasticsearch" imgSrc={elasticsearchImg} />
      </ul>

      <a className={styles.moreBtn} href="#TODO">
        More about the tech
      </a>
    </section>
  );
}
