// @flow
import * as React from 'react';

type ContentProps = {
  children?: React.Node,
};

export default function Content({ children }: ContentProps) {
  return <div>{children}</div>;
}
