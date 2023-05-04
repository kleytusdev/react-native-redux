// Navigator
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigations/Navigator'
// Redux
import { Provider } from 'react-redux'
import store from './src/store/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
