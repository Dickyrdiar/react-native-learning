import React from 'react';
import {Provider} from 'react-redux';
import BottomNavigation from './src/navigation/navigation';
import {store} from './src/redux/store';
import {TabperScreen} from './src/navigation/navigatePerScreen/index';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <TabperScreen />
    </Provider>
  );
}

export default App;
