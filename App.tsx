import React from 'react';
import {StatusBar} from 'react-native';

import {Mindtrack} from './src/Mindtrack';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Mindtrack />
    </>
  );
}

export default App;
