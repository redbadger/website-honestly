/* eslint-disable max-len */

import appleIcon57 from './assets/apple-touch-icon-57x57.png';
import appleIcon60 from './assets/apple-touch-icon-60x60.png';
import appleIcon72 from './assets/apple-touch-icon-72x72.png';
import appleIcon76 from './assets/apple-touch-icon-76x76.png';
import appleIcon114 from './assets/apple-touch-icon-114x114.png';
import appleIcon120 from './assets/apple-touch-icon-120x120.png';
import appleIcon144 from './assets/apple-touch-icon-144x144.png';
import appleIcon152 from './assets/apple-touch-icon-152x152.png';
import appleIcon180 from './assets/apple-touch-icon-180x180.png';
import favIcon16 from './assets/favicon-16x16.png';
import favIcon32 from './assets/favicon-32x32.png';
import favIcon96 from './assets/favicon-96x96.png';
import favIcon192 from './assets/android-chrome-192x192.png';
import favIcon194 from './assets/favicon-194x194.png';
import msIcon from './assets/mstile-144x144.png';
import { hot } from '../config';

import React, { Component } from 'react';

import { AllHtmlEntities as htmlEntities } from 'html-entities';

export default class DefaultTemplate extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    initialState: React.PropTypes.object,
    js: React.PropTypes.bool,
    title: React.PropTypes.string,
  };

  static defaultProps = {
    children: [],
    initialState: {},
    js: true,
    title: 'Red Badger',
  };

  renderMeta() {
    return [
      <meta key="charset" charSet="utf-8" />,
      <meta key="ua" httpEquiv="x-ua-compatible" content="ie=edge" />,
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />,
      <meta key="ms-tilecolor" name="msapplication-TileColor" content="#b91d47" />,
      <meta key="ms-tileimage" name="msapplication-TileImage" content={msIcon} />,
    ];
  }

  renderAssets() {
    const assets = [
      <link key={appleIcon57} rel="apple-touch-icon" type="image/png" sizes="57x57" href={appleIcon57} />,
      <link key={appleIcon60} rel="apple-touch-icon" type="image/png" sizes="60x60" href={appleIcon60} />,
      <link key={appleIcon72} rel="apple-touch-icon" type="image/png" sizes="72x72" href={appleIcon72} />,
      <link key={appleIcon76} rel="apple-touch-icon" type="image/png" sizes="76x76" href={appleIcon76} />,
      <link key={appleIcon114} rel="apple-touch-icon" type="image/png" sizes="114x114" href={appleIcon114} />,
      <link key={appleIcon120} rel="apple-touch-icon" type="image/png" sizes="120x120" href={appleIcon120} />,
      <link key={appleIcon144} rel="apple-touch-icon" type="image/png" sizes="144x144" href={appleIcon144} />,
      <link key={appleIcon152} rel="apple-touch-icon" type="image/png" sizes="152x152" href={appleIcon152} />,
      <link key={appleIcon180} rel="apple-touch-icon" type="image/png" sizes="180x180" href={appleIcon180} />,
      <link key={favIcon16} rel="icon" type="image/png" sizes="16x16" href={favIcon16} />,
      <link key={favIcon32} rel="icon" type="image/png" sizes="32x32" href={favIcon32} />,
      <link key={favIcon96} rel="icon" type="image/png" sizes="96x96" href={favIcon96} />,
      <link key={favIcon192} rel="icon" type="image/png" sizes="192x192" href={favIcon192} />,
      <link key={favIcon194} rel="icon" type="image/png" sizes="194x194" href={favIcon194} />,
    ];

    if (!hot) {
      assets.push(<link key="stylesheet" rel="stylesheet" type="text/css" href="/assets/style.css" />);
    }

    return assets;
  }

  renderScripts() { // eslint-disable-line consistent-return
    if (this.props.js) {
      return [
        <script key="state" id="initialState" type="application/json"
          dangerouslySetInnerHTML={{ __html: htmlEntities.decode(JSON.stringify(this.props.initialState)) }} />,
        <script key="bundle" type="text/javascript" src="/assets/client.js" />,
        <script key="prismic-toolbar" type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js" />,
        <script type="text/javascript" src="https://secure.leadforensics.com/js/77932.js" />,
      ];
    }

    return (
      <noscript>
        <img src="https://secure.leadforensics.com/77932.png" style={{ display: 'none' }} />
      </noscript>
    );
  }

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7838134/7848772/css/fonts.css" />

          {this.renderMeta()}
          {this.renderAssets()}
        </head>
        <body>
          <div id="mount" dangerouslySetInnerHTML={{ __html: htmlEntities.decode(this.props.children) }} />
          {this.renderScripts()}
        </body>
      </html>
    );
  }
}
