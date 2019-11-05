// @flow

import * as React from 'react';

type Props = {
  children: React.Node,
};
// TODO: I no longer serve a purpose, remove me.

export default function ScrollTracker({ children }: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}
