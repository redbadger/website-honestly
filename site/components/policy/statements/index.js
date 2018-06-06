// @flow

import * as React from 'react';
import Statement from '../statement';

export type StatementType = {
  body: () => React.Node,
};

const Statements = ({
  statements,
  policyIndex,
}: {
  statements: Array<StatementType>,
  policyIndex: number,
}) => {
  return (
    <ol>
      {statements.map((statement, statementIndex) => (
        <Statement
          key={'statement-' + statementIndex.toString()}
          statementIndex={statementIndex + 1}
          policyIndex={policyIndex}
          {...statement}
        />
      ))}
    </ol>
  );
};

export default Statements;
