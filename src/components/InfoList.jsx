import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { addFavorite, removeFavorite } from "../store/slices/favorite/favoriteSlice";
// Slice
import { fetchAllInfo } from '../store/slices/info/infoSlice'
// Redux
import { useDispatch, useSelector } from 'react-redux'

const InfoList = () => {

  const navigation = useNavigation();

  const { list: info } = useSelector((state) => state.info);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllInfo());
  }, []);

  const handleUpdateInfo = (id, name, status, species) => {
    navigation.navigate('UpdateInfo', { id, name, status, species });
  };

  const handleAddFavorite = (id, image, name, status, species) => {
    dispatch(addFavorite({ id, image, name, status, species }));
  };

  return (
    <>
      <SafeAreaView style={{ flex:1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#121214' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 5 }}>
            {info.map((info, index) => (
              <View key={index} style={{ width: '45%', marginBottom: 20 }}>
                <LinearGradient
                  colors={["#857EF1", "#9F61EA", "#DE647D", "#E69673"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    backgroundColor: "#E69673",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ paddingVertical: 20, justifyContent: 'center' }}>
                    <Image
                      style={{ borderWidth: 5, borderColor: '#fff', borderRadius: 60, width: 100, height: 100, alignSelf: "center" }}
                      source={{ uri: info.image }}
                    />

                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>{info.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{info.status}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{info.species}</Text>
                    <View style={{ gap: 10, marginVertical: 10 }} >
                      <TouchableOpacity 
                        style={{ alignSelf: 'center', backgroundColor: '#EBE7EE', padding: 10, borderRadius: 10 }}
                        onPress={() => handleUpdateInfo(info.id, info.name, info.status, info.species)}
                      >
                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Update Info</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={{ alignSelf: 'center', backgroundColor: '#EBE7EE', padding: 10, borderRadius: 10 }}
                        onPress={() => {
                          const { id, image, name, status, species } = info;
                          handleAddFavorite(id, image, name, status, species);
                        }}
                      >
                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Add favorite</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={{ alignSelf: 'center', backgroundColor: '#EBE7EE', padding: 10, borderRadius: 10 }}
                        onPress={() => {
                          dispatch(removeFavorite(info.id)); // agrega esta línea para eliminar el ítem de favoritos
                        }}
                      >
                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Remove favorite</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default InfoList

const styles = StyleSheet.create({})