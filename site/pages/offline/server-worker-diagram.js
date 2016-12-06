import React from 'react';
import styles from './style.css';

export default () => (
  <svg className={styles.diagram} viewBox="0 0 268 402" version="1.1">
    <defs>
      <rect id="path-1" x="22" y="348" width="90" height="54" />
      <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="90" height="54" fill="white">
        <use xlinkHref="#path-1" />
      </mask>
      <rect id="path-3" x="154" y="348" width="90" height="54" />
      <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="90" height="54" fill="white">
        <use xlinkHref="#path-3" />
      </mask>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="lost-connection-L-v2" transform="translate(-678.000000, -1182.000000)">
        <g id="ServerWorker-diagram" transform="translate(679.000000, 1182.000000)">
          <g>
            <path d="M159.853801,32.5146199 L159.853801,14.9707602 L149.912281,14.9707602 L149.912281,32.5146199 L159.853801,32.5146199 Z M162.426901,10.0584795 C163.128655,10.0584795 163.71345,10.2923977 164.181287,10.7602339 C164.649123,11.2280702 164.883041,11.8128655 164.883041,12.5146199 L164.883041,37.4269006 C164.883041,38.1286587 164.649123,38.7329407 164.181287,39.2397661 C163.71345,39.7465912 163.128655,40 162.426901,40 L147.45614,40 C146.754386,40 146.150099,39.7465912 145.643279,39.2397661 C145.136451,38.7329407 144.883041,38.1286587 144.883041,37.4269006 L144.883041,12.5146199 C144.883041,11.8128655 145.136451,11.2280702 145.643279,10.7602339 C146.150099,10.2923977 146.754386,10.0584795 147.45614,10.0584795 L162.426901,10.0584795 Z M114.94152,5.02923977 L114.94152,32.5146199 L139.97076,32.5146199 L139.97076,40 L105,40 L105,32.5146199 L110.02924,32.5146199 L110.02924,5.02923977 C110.02924,3.70369871 110.516564,2.53411556 111.491228,1.52046784 C112.465892,0.506820117 113.615979,-4.54747351e-13 114.94152,-4.54747351e-13 L159.853801,-4.54747351e-13 L159.853801,5.02923977 L114.94152,5.02923977 Z" id="Page-1" fill="#212121" />
            <g id="Group-10" transform="translate(31.000000, 226.000000)">
              <path d="M14.8079625,0.922716628 C15.557383,1.67213714 20.3504644,6.44960674 29.1873566,15.2552693 C38.0242428,24.0609319 44.6908425,30.774373 49.1873536,35.3957845 L46.6580796,37.9250585 L40.0070258,31.2740047 L32.2318501,40.9227166 L9,11.9765808 C11.0609001,10.2903921 13.4964733,8.82279869 16.3067916,7.57377049 L12.2786885,3.45199063 L14.8079625,0.922716628 Z M55.4637002,11.9765808 L44.5971897,25.559719 L23.8946136,4.95081967 C26.70493,4.32630557 29.4839809,4.01405152 32.2318501,4.01405152 C40.1631918,4.01405152 47.9070659,6.66820197 55.4637002,11.9765808 Z" id="Page-1" fill="#999999" />
              <text id="OFFLINE" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#212121">
                <tspan x="0" y="61">OFFLINE</tspan>
              </text>
            </g>
            <g id="Group-9" transform="translate(168.000000, 227.000000)">
              <path d="M29.177665,40.8324873 L4,9.46192893 C12.1895505,3.7089397 20.5820231,0.83248731 29.177665,0.83248731 C37.7733068,0.83248731 46.1657795,3.7089397 54.3553299,9.46192893 L29.177665,40.8324873 Z" id="Page-1" fill="#22D69B" />
              <text id="ONLINE" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#212121">
                <tspan x="0" y="61">ONLINE</tspan>
              </text>
            </g>
            <text id="BACKEND-Copy" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#212121">
              <tspan x="161.4" y="382">BACKEND</tspan>
            </text>
            <text id="OFFLINE-CACHE" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#212121">
              <tspan x="34.872" y="371">OFFLINE </tspan>
              <tspan x="40.024" y="390">CACHE</tspan>
            </text>
            <g id="Group-11" transform="translate(41.000000, 131.000000)">
              <rect id="Rectangle" fill="#212121" x="0" y="0" width="188" height="39" rx="19.5" />
              <text id="SERVICE-WORKER" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#F8F8F8">
                <tspan x="26" y="25">SERVICE WORKER</tspan>
              </text>
            </g>
            <text id="WEB-APP" fontFamily="ProximaNova-Bold, Proxima Nova" fontSize="16" fontWeight="bold" fill="#212121">
              <tspan x="100" y="66">WEB APP</tspan>
            </text>
            <use id="Rectangle-3" stroke="#212121" mask="url(#mask-2)" strokeWidth="2" strokeDasharray="5,5" xlinkHref="#path-1" />
            <use id="Rectangle-3-Copy" stroke="#212121" mask="url(#mask-4)" strokeWidth="2" strokeDasharray="5,5" xlinkHref="#path-3" />
            <polyline id="Path-2" stroke="#212121" points="246.293041 376.868362 266.155838 376.868362 266.155838 23 173 23" />
            <path id="Path-2-decoration-1" d="M183.8,20 L173,23 L183.8,26" stroke="#212121" />
            <polyline id="Path-2-Copy" stroke="#212121" transform="translate(46.577919, 199.934181) scale(-1, 1) translate(-46.577919, -199.934181) " points="73.293041 376.868362 93.1558383 376.868362 93.1558383 23 -4.8316906e-13 23" />
            <path id="Path-2-Copy-decoration-1" d="M10.8,20 L-4.8316906e-13,23 L10.8,26" stroke="#212121" />
            <path d="M139,78 L139,122.234613" id="Path-3" stroke="#212121" />
            <path id="Path-3-decoration-1" d="M136,111.434613 L139,122.234613 L142,111.434613" stroke="#212121" />
            <path d="M197,179 L197,223.234613" id="Path-3-Copy" stroke="#212121" />
            <path id="Path-3-Copy-decoration-1" d="M194,212.434613 L197,223.234613 L200,212.434613" stroke="#212121" />
            <path d="M63,179 L63,223.234613" id="Path-3-Copy-2" stroke="#212121" />
            <path id="Path-3-Copy-2-decoration-1" d="M60,212.434613 L63,223.234613 L66,212.434613" stroke="#212121" />
            <path d="M63,295 L63,339.234613" id="Path-3-Copy-3" stroke="#212121" />
            <path id="Path-3-Copy-3-decoration-1" d="M60,328.434613 L63,339.234613 L66,328.434613" stroke="#212121" />
            <path d="M196,295 L196,339.234613" id="Path-3-Copy-4" stroke="#212121" />
            <path id="Path-3-Copy-4-decoration-1" d="M193,328.434613 L196,339.234613 L199,328.434613" stroke="#212121" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
