// @flow

import React from 'react';

type Props = {
  reverse?: boolean,
};

export default function ArrowLight({ reverse, ...props }: Props) {
  return (
    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="none" d="M-1-1h25v25H-1z" />
      <path
        fill="#F8F8F8"
        fillRule="evenodd"
        d={
          reverse
            ? 'M12 21.955L1.09 11.5 12 1.045l1.914 1.835-7.592 7.336H22.91v2.568H6.322l7.592 7.336z'
            : 'M12 1.045L22.91 11.5 12 21.955l-1.914-1.835 7.592-7.336H1.09v-2.568h16.587L10.086 2.88z'
        }
      />
    </svg>
  );
}
