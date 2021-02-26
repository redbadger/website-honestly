// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

import Link from '../../components/link';
import styles from './styles.css';

import nodejsImg from './img/nodejs_v1_x1.png';
import kubernetesImg from './img/kubernetes_v1_x1.png';
import dockerImg from './img/docker_v1_x1.png';
import istioImg from './img/istio_v1_x1.png';
import graphqlImg from './img/graphql_v1_x1.png';
import reactImg from './img/react_v1_x1.png';
import golangImg from './img/golang_v1_x1.png';
import gcpImg from './img/GCP_v1_x1.png';
import typescriptImg from './img/typescript_v1_x1.png';
import awsImg from './img/AWS_v4_x1.png';
import rustImg from './img/rust_v1_x1.png';
import azureImg from './img/azure_v1_x1.png';

import nodejsImgLarge from './img/nodejs_v1.png';
import kubernetesImgLarge from './img/kubernetes_v1.png';
import dockerImgLarge from './img/docker_v1.png';
import istioImgLarge from './img/istio_v1.png';
import graphqlImgLarge from './img/graphql_v1.png';
import reactImgLarge from './img/react_v1.png';
import golangImgLarge from './img/golang_v1.png';
import gcpImgLarge from './img/GCP_v1.png';
import typescriptImgLarge from './img/typescript_v1.png';
import awsImgLarge from './img/AWS_v4.png';
import rustImgLarge from './img/rust_v1.png';
import azureImgLarge from './img/azure_v1.png';

import plusImg01 from './img/plus01_x2.png';
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
    <section className={techSliceClasses} data-cy="tech-slice">
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

        <TechListItem name="Rust" imgSrcLarge={rustImgLarge} imgSrc={rustImg} />
        <TechListItem
          name="Golang"
          imgSrcLarge={golangImgLarge}
          imgSrc={golangImg}
          modifier="tall"
        />
        <TechListItem
          name="Typescript"
          imgSrcLarge={typescriptImgLarge}
          imgSrc={typescriptImg}
          plusSymbol={plusImg01}
        />
        <TechListItem name="NodeJS" imgSrcLarge={nodejsImgLarge} imgSrc={nodejsImg} />
      </ul>
      <ul className={styles.techList}>
        <TechListItem name="AWS" imgSrcLarge={awsImgLarge} imgSrc={awsImg} modifier="wide" />
        <TechListItem name="GCP" imgSrcLarge={gcpImgLarge} imgSrc={gcpImg} />
        <TechListItem name="Azure" imgSrcLarge={azureImgLarge} imgSrc={azureImg} />
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
