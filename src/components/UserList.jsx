import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// Slice
import { fetchAllUsers } from "../store/slices/users/userSlice";
// Redux
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { list: users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex:1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#121214' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 5 }}>
            {users.map((user, index) => (
              <TouchableOpacity key={index} style={{ width: '45%', marginBottom: 20 }}>
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
                  <View style={{ flex: 1.2, justifyContent: 'center' }}>
                    <Image
                      style={{ borderWidth: 5, borderColor: '#fff', borderRadius: 60, width: 100, height: 100, alignSelf: "center" }}
                      source={{ uri: user.avatar }}
                    />

                  </View>
                  <View style={{ justifyContent: 'center', flex: 0.5, paddingHorizontal: 10, paddingVertical: 2, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>{`${user.first_name} ${user.last_name}`}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{user.email}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({});
