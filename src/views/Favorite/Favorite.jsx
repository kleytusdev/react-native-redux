import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/slices/favorite/favoriteSlice';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const [displayedFavorites, setDisplayedFavorites] = useState([]);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  // Filtrar los favoritos duplicados y actualizar el estado
  useEffect(() => {
    const uniqueFavorites = favorites.reduce((acc, current) => {
      const existingItem = acc.find((item) => item.id === current.id);
      if (!existingItem) {
        return [...acc, current];
      }
      return acc;
    }, []);
    setDisplayedFavorites(uniqueFavorites);
  }, [favorites]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121214', justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Favorite Products</Text>
      <FlatList
        data={displayedFavorites}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, gap: 10 }}>
            <View style={{ paddingVertical: 20, justifyContent: 'center' }}>
              <Image
                style={{ borderWidth: 5, borderColor: '#fff', borderRadius: 60, width: 100, height: 100, alignSelf: "center" }}
                source={{ uri: item.image }}
              />
            </View>
            <Text style={{ color: '#fff', fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: '#fff', marginLeft: 10 }}>{item.status} - {item.species}</Text>

            <TouchableOpacity
              style={{ backgroundColor: '#EBE7EE', padding: 10, borderRadius: 10 }}
              onPress={() => handleRemoveFavorite(item.id)}
            >
              <Text style={{ fontSize: 15, fontWeight: '400' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  
});
