import React from 'react';
import { Fabric, initializeIcons, Stack, IStackTokens } from 'office-ui-fabric-react';
import { HashRouter, Route } from 'react-router-dom';
import { Authors } from './components/Authors/Authors';
import { Books } from './components/Books';
import { Sidebar } from './components/Sidebar';

initializeIcons();

const stackTokens: IStackTokens = {
  childrenGap: 10
};

export const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Fabric>
        <Stack
          tokens={stackTokens}
          horizontal
          verticalAlign="start">
          <Stack.Item>
            <Sidebar />
          </Stack.Item>
          <Stack.Item>
            <Route exact path='/authors' component={Authors} />
            <Route exact path='/books' component={Books} />
          </Stack.Item>
        </Stack>
      </Fabric>
    </HashRouter>
  )
}
