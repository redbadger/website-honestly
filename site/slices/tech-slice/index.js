// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

import Link from '../../components/link';
import styles from './styles.css';

import awsImg from './img/AWS_x1.png';
import awsImgLarge from './img/AWS_x2.png';
import dockerImg from './img/docker_x1.png';
import dockerImgLarge from './img/docker_x2.png';
import esImg from './img/es_x1.png';
import esImgLarge from './img/es_x2.png';
import flowImg from './img/flow_x1.png';
import flowImgLarge from './img/flow_x2.png';
import gcpImg from './img/GCP_x1.png';
import gcpImgLarge from './img/GCP_x2.png';
import golangImg from './img/golang_x1.png';
import golangImgLarge from './img/golang_x2.png';
import graphqlImg from './img/graphql_x1.png';
import graphqlImgLarge from './img/graphql_x2.png';
import istioImg from './img/istio_x1.png';
import istioImgLarge from './img/istio_x2.png';
import javaImg from './img/java_x1.png';
import javaImgLarge from './img/java_x2.png';
import kubernetesImg from './img/kubernetes_x1.png';
import kubernetesImgLarge from './img/kubernetes_x2.png';
import nodejsImg from './img/nodejs_x1.png';
import nodejsImgLarge from './img/nodejs_x2.png';
import reactImg from './img/react_x1.png';
import reactImgLarge from './img/react_x2.png';

import plusImg01 from './img/plus01_x2.png';
import plusImg02 from './img/plus02_x2.png';
import plusImg03 from './img/plus03_x2.png';
import plusImg04 from './img/plus04_x2.png';

type TechSliceProps = {
  isHeading?: boolean,
};

type TechListItemProps = {
  name: string,
  imgSrc: string,
  imgSrcLarge: string,
  plusSymbol?: string,
  modifier?: string,
};

function TechListItem({ name, imgSrc, imgSrcLarge, plusSymbol, modifier }: TechListItemProps) {
  return (
    <li className={styles.techListItem}>
      <figure className={styles.techItem}>
        <img
          alt={name + ' logo'}
          className={modifier ? styles[`techLogo--${modifier}`] : styles.techLogo}
          src={imgSrc}
          srcSet={`${imgSrc} 90w, ${imgSrcLarge} 150w`}
        />
        <figcaption className={styles.techName}>{name}</figcaption>
      </figure>
      {plusSymbol && <img alt="" className={styles.techPlusSymbol} src={plusSymbol} />}
    </li>
  );
}

export default function TechSlice({ isHeading }: TechSliceProps) {
  const techSliceClasses = `${styles.techSlice} ${isHeading ? '' : styles.withDivider}`;
  return (
    <section className={techSliceClasses}>
      <div className={styles.techSliceIntro}>
        {isHeading ? (
          <h1 className={styles.heading}>
            We love tech. But we only use what’s right for the job.
          </h1>
        ) : (
          <h2 className={styles.heading}>
            We love tech. But we only use what’s right for the job.
          </h2>
        )}

        <p className={styles.projectsBlerb}>
          Here is a selection of what we’ve used on recent projects.
        </p>
      </div>

      <ul className={styles.techList}>
        <TechListItem name="React + React Native" imgSrcLarge={reactImgLarge} imgSrc={reactImg} />
        <TechListItem name="GraphQL" imgSrcLarge={graphqlImgLarge} imgSrc={graphqlImg} />
        <TechListItem name="Java" imgSrcLarge={javaImgLarge} imgSrc={javaImg} />
        <TechListItem
          name="ESNext"
          imgSrcLarge={esImgLarge}
          imgSrc={esImg}
          plusSymbol={plusImg01}
        />
        <TechListItem
          name="Flow + Typescript"
          imgSrcLarge={flowImgLarge}
          imgSrc={flowImg}
          plusSymbol={plusImg02}
          modifier="tall"
        />
        <TechListItem name="NodeJS" imgSrcLarge={nodejsImgLarge} imgSrc={nodejsImg} />
      </ul>
      <ul className={styles.techList}>
        {/* replace icons when ready */}
        <TechListItem name="AWS" imgSrcLarge={awsImgLarge} imgSrc={awsImg} modifier="wide" />
        <TechListItem name="GCP" imgSrcLarge={gcpImgLarge} imgSrc={gcpImg} />
        <TechListItem
          name="Golang"
          imgSrcLarge={golangImgLarge}
          imgSrc={golangImg}
          modifier="tall"
        />
        <TechListItem
          name="Docker"
          imgSrcLarge={dockerImgLarge}
          imgSrc={dockerImg}
          plusSymbol={plusImg03}
          modifier="wide"
        />
        <TechListItem
          name="Kubernetes"
          imgSrcLarge={kubernetesImgLarge}
          imgSrc={kubernetesImg}
          plusSymbol={plusImg04}
        />
        <TechListItem name="Istio" imgSrcLarge={istioImgLarge} imgSrc={istioImg} />
      </ul>
      {!isHeading && (
        <Link className={styles.moreBtn} to="technology">
          More about the tech
        </Link>
      )}
    </section>
  );
}
