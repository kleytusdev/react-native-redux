import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// Slice
import { fetchAllInfo } from '../store/slices/info/infoSlice'
// Redux
import { useDispatch, useSelector } from 'react-redux'

const InfoList = () => {

  const { list: info } = useSelector((state) => state.info);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllInfo());
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex:1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#121214' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 5 }}>
            {info.map((info, index) => (
              <TouchableOpacity key={index} style={{ width: '47%', height: 200, marginBottom: 20 }}>
                <LinearGradient
                  colors={["#857EF1", "#9F61EA", "#DE647D", "#E69673"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    backgroundColor: "#E69673",
                    borderRadius: 20,
                    overflow: "hidden",
                    height: '100%',
                  }}
                >
                  <View style={{ flex: 1.2, justifyContent: 'center' }}>
                    <Image
                      style={{ borderWidth: 5, borderColor: '#fff', borderRadius: 60, width: '50%', height: '70%', alignSelf: "center" }}
                      source={{ uri: info.image }}
                    />

                  </View>
                  <View style={{ justifyContent: 'center', flex: 0.5, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>{info.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{info.status}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{info.species}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default InfoList

const styles = StyleSheet.create({})