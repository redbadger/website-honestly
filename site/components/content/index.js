import React from 'react';

export default function Content({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Content.propTypes = {
  children: React.PropTypes.node,
};
