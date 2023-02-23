import React from 'react';
import {Provider} from 'react-redux';
import BottomNavigation from './src/navigation/navigation';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
}

export default App;
