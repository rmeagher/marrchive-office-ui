import React from 'react';
import { Nav } from 'office-ui-fabric-react';

export const Sidebar: React.FunctionComponent = () => {
  return (
    <Nav
      ariaLabel='Maarchive sidebar'
      groups={[
        {
          name: 'Maarchive',
          expandAriaLabel: 'Expand Maarchive section',
          collapseAriaLabel: 'Collapse Maarchive section',
          links: [
            {
              key: 'Authors',
              name: 'Authors',
              url: '#/authors'
            },
            {
              key: 'Books',
              name: 'Books',
              url: '#/books'
            }
          ]
        }
      ]} />
  );
}
