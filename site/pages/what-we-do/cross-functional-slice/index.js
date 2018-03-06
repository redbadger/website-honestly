// @flow
import React from 'react';
import styles from './styles.css';
// import Picture from '../../../components/picture';

import bigParty1x from './png/big-party.png';
import bigParty2x from './png/big-party@2x.png';
import bigParty3x from './png/big-party@3x.png';
import crossFunctionalBadgers from './jpg/cross-functional-badgers.jpg';

type Props = {
  alt?: string,
  className?: string,
  role?: string,
  src: string,
  src2x?: string,
  src3x?: string,
};

const Image = ({ alt, className, role, src, src2x, src3x }: Props) => {
  const src2xTemplate = src2x ? `, ${src2x} 2x` : '';
  const src3xTemplate = src3x ? `, ${src3x} 3x` : '';
  return (
    <picture>
      {src && <source srcSet={`${src}${src2xTemplate}${src3xTemplate}`} className={className} />}
      <img src={src} alt={alt || ''} role={role} className={className} />
    </picture>
  );
};

Image.defaultProps = {
  alt: '',
  className: undefined,
  role: undefined,
  src: undefined,
};

const CrossFunctionalSlice = () => (
  <section className={styles.crossFunctionalSlice}>
    {/* <img src="" /> */}
    <Image
      src={crossFunctionalBadgers}
      alt="working in a cross functional team"
      className={styles.image}
    />
    <h2 className={styles.heading}>Working in cross functional teams</h2>
    <div className={styles.imageContainer}>
      <Image
        src={bigParty1x}
        src2x={bigParty2x}
        src3x={bigParty3x}
        role="presentation"
        className={styles.image}
      />
    </div>
    <div className={styles.textContainer}>
      <h3 className={styles.blueSubHeading}>Delivery leads</h3>
      <p className={styles.detail}>Drive efficiency and reduce risk through our lean methods.</p>
      <h3 className={styles.greenSubHeading}>Tech</h3>
      <p className={styles.detail}>Transform your business by being bold with tech.</p>
      <h3 className={styles.yellowSubHeading}>Design</h3>
      <p className={styles.detail}>
        Improve customer experience, create delightful products and services.
      </p>
      <h3 className={styles.redSubHeading}>You (the client)</h3>
      <p className={styles.detail}>Together we build a capability and lasting change.</p>
    </div>
  </section>
);

export default CrossFunctionalSlice;
