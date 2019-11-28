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
    (this: any).el = document.createElement('div');
  }

  componentDidMount = () => {
    (this: any).portalRoot = document.getElementById((this: any).props.portalRootId);
    (this: any).portalRoot.appendChild((this: any).el);
  };

  componentWillUnmount = () => {
    (this: any).portalRoot.removeChild((this: any).el);
  };

  render() {
    const { children } = (this: any).props;
    if (canUseDOM()) {
      return ReactDOM.createPortal(children, (this: any).el);
    }
    return null;
  }
}

export default Portal;
