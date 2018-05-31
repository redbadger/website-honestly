// @flow

import React from 'react';
import Statement from '../statement';

type StatementT = {
  body: Function,
};

const Statements = ({
  statements,
  policyIndex,
}: {
  statements: Array<StatementT>,
  policyIndex: number,
}) => {
  return (
    <ol>
      {statements.map((statement, statementIndex) => (
        <Statement
          key={statementIndex}
          statementIndex={statementIndex + 1}
          policyIndex={policyIndex}
          {...statement}
        />
      ))}
    </ol>
  );
};

export default Statements;
