import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../store/slices/info/infoSlice';
import { useRoute } from '@react-navigation/native';

const UpdateInfo = ({ navigation }) => {

  const {params} = useRoute();
  const {id, name, status, species} = params;

  const [infoName, setInfoName] = useState(name);
  const [infoStatus, setInfoStatus] = useState(status);
  const [infoSpecies, setInfoSpecies] = useState(species);

  const dispatch = useDispatch();

  
  const handleUpdate = () => {
    dispatch(updateInfo({ id, name: infoName, status: infoStatus, species: infoSpecies }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Name"
        style={styles.input}
        value={infoName}
        onChangeText={setInfoName}
      />
      <TextInput
        placeholder="New Status"
        style={styles.input}
        value={infoStatus}
        onChangeText={setInfoStatus}
      />
      <TextInput
        placeholder="New Species"
        style={styles.input}
        value={infoSpecies}
        onChangeText={setInfoSpecies}
      />
      <TouchableOpacity onPress={handleUpdate} style={styles.button}>
        <Text style={styles.buttonText}>Update Info</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpdateInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#EBE7EE',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
  },
});