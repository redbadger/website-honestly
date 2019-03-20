// @flow

import React from 'react';

export default function ServiceWorkerDiagram(props: {}) {
  return (
    <svg
      viewBox="0 0 268 402"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="a" d="M22 348h90v54H22z" />
        <mask id="c" x="0" y="0" width="90" height="54" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path id="b" d="M154 348h90v54h-90z" />
        <mask id="d" x="0" y="0" width="90" height="54" fill="#fff">
          <use xlinkHref="#b" />
        </mask>
      </defs>
      <g transform="translate(1)" fill="none" fillRule="evenodd">
        <path
          d="M159.854 32.515V14.97h-9.942v17.544h9.942zm2.573-22.457c.702 0 1.286.234 1.754.702.468.468.702 1.053.702 1.755v24.912a2.58 2.58 0 0 1-.702 1.813c-.468.507-1.052.76-1.754.76h-14.97a2.475 2.475 0 0 1-1.814-.76 2.475 2.475 0 0 1-.76-1.813V12.515c0-.702.253-1.287.76-1.755a2.581 2.581 0 0 1 1.813-.702h14.97zM114.942 5.03v27.486h25.029V40H105v-7.485h5.03V5.029c0-1.325.487-2.495 1.461-3.509.975-1.013 2.125-1.52 3.45-1.52h44.913v5.03h-44.912z"
          fill="#212121"
        />
        <path
          d="M45.808 226.923c.75.75 5.542 5.527 14.38 14.332 8.836 8.806 15.503 15.52 20 20.14l-2.53 2.53-6.651-6.651-7.775 9.649L40 237.977c2.06-1.687 4.496-3.154 7.307-4.403l-4.028-4.122 2.529-2.53zm40.656 11.054L75.597 251.56l-20.702-20.61a38.37 38.37 0 0 1 8.337-.936c7.931 0 15.675 2.654 23.232 7.963z"
          fill="#999"
        />
        <text
          fontFamily="ProximaNova-Bold, Proxima Nova"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
          transform="translate(31 226)"
        >
          <tspan x="0" y="61">
            OFFLINE
          </tspan>
        </text>
        <path
          d="M197.178 267.832L172 236.462c8.19-5.753 16.582-8.63 25.178-8.63 8.595 0 16.988 2.877 25.177 8.63l-25.177 31.37z"
          fill="#22D69B"
        />
        <text
          fontFamily="ProximaNova-Bold, Proxima Nova"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
          transform="translate(168 227)"
        >
          <tspan x="0" y="61">
            ONLINE
          </tspan>
        </text>
        <text
          fontFamily="ProximaNova-Bold, Proxima Nova"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
        >
          <tspan x="161.4" y="382">
            BACKEND
          </tspan>
        </text>
        <text
          fontFamily="ProximaNova-Bold, Proxima Nova"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
        >
          <tspan x="34.872" y="371">
            OFFLINE{' '}
          </tspan>
          <tspan x="40.024" y="390">
            CACHE
          </tspan>
        </text>
        <g transform="translate(41 131)">
          <rect fill="#212121" width="188" height="39" rx="19.5" />
          <text
            fontFamily="ProximaNova-Bold, Proxima Nova"
            fontSize="16"
            fontWeight="bold"
            fill="#F8F8F8"
          >
            <tspan x="26" y="25">
              SERVICE WORKER
            </tspan>
          </text>
        </g>
        <text
          fontFamily="ProximaNova-Bold, Proxima Nova"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
        >
          <tspan x="100" y="66">
            WEB APP
          </tspan>
        </text>
        <use stroke="#212121" mask="url(#c)" strokeWidth="2" strokeDasharray="5,5" xlinkHref="#a" />
        <use stroke="#212121" mask="url(#d)" strokeWidth="2" strokeDasharray="5,5" xlinkHref="#b" />
        <path stroke="#212121" d="M246.293 376.868h19.863V23H173" />
        <path d="M183.8 20L173 23l10.8 3M19.863 376.868H0V23h93.156" stroke="#212121" />
        <path
          d="M10.8 20L0 23l10.8 3M139 78v44.235m-3-10.8l3 10.8 3-10.8M197 179v44.235m-3-10.8l3 10.8 3-10.8M63 179v44.235m-3-10.8l3 10.8 3-10.8M63 295v44.235m-3-10.8l3 10.8 3-10.8M196 295v44.235m-3-10.8l3 10.8 3-10.8"
          stroke="#212121"
        />
      </g>
    </svg>
  );
}
