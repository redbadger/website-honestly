// @flow
import React from 'react';

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

export default Image;
