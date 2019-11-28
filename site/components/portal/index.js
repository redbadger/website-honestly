// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.Node,
  portalRootId: string,
};

function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

class Portal extends React.Component<PortalProps> {
  constructor(props: PortalProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    this.portalRoot = document.getElementById(this.props.portalRootId);
    this.portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    this.portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    if (canUseDOM()) {
      return ReactDOM.createPortal(children, this.el);
    }
    return null;
  }
}

export default Portal;
