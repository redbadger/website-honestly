/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import isArray from 'lodash.isarray';
import isString from 'lodash.isstring';
import React, { Component } from 'react';

import Paragraph from './paragraph';
import Link from './link';
import Strong from './strong';
import Title1 from './title1';
import Title2 from './title2';
import Title3 from './title3';
import Content from '../content';

const componentIndex = {
  Paragraph,
  Link,
  Strong,
  Content,
  Title1,
  Title2,
  Title3,
};

type ComponentRendererProps = {
  data: {
    type?: string,
  },
};

export default class ComponentRenderer extends Component<ComponentRendererProps> {
  build(data) {
    const componentName = data.type;
    const CustomComponent = componentIndex[componentName];
    const componentChildren = data.props.children;

    let text = null;
    let childNodes = [];

    if (isArray(componentChildren)) {
      childNodes = componentChildren.map((child, index) => {
        if (child.type && componentIndex[child.type]) {
          child.props.key = index; // eslint-disable-line no-param-reassign
          return this.build(child);
        }
        return child;
      });
    } else if (React.isValidElement(componentChildren)) {
      childNodes = componentChildren;
    } else if (isString(componentChildren)) {
      text = componentChildren;
    }

    return React.createElement(CustomComponent, data.props, text || childNodes);
  }

  render() {
    return this.build(this.props.data);
  }
}
