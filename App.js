import { StyleSheet, Text, View } from 'react-native';
import UserList from './src/components/UserList';
import store from './src/store';

// Redux
import { Provider } from 'react-redux'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <UserList />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
