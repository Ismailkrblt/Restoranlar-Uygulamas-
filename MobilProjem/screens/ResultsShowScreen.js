import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp'; 
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  const formatPhoneNumber = (phoneNumber) => {
    // Remove leading characters (same as before)
    phoneNumber = phoneNumber.replace(/^[\+()\s-]*/g, '');
  
    // Slice the number from index 1 (discarding the first character)
    const formattedNumber = phoneNumber.slice(1);
  
    // Check if the number is long enough for 4-3-4 format
    if (formattedNumber.length < 7) {
      return formattedNumber; // Return as is if too short
    }
  
    // Insert hyphens using string interpolation
    const formatted434 = `${formattedNumber.slice(0, 4)}-${formattedNumber.slice(4, 7)}-${formattedNumber.slice(7)}`;
    return formatted434;
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{result.name}</Text>
        {result.rating && (
  <View style={styles.ratingContainer}>
    <Text style={styles.rating}>{result.rating}  ★ </Text>
    <Image
      source={{ uri: result.rating_image }}
      style={styles.ratingImage}
    />
    {result.review_count && (
      <Text style={styles.reviewCount}>({result.review_count} Yorumlar)</Text>
    )}
  </View>
)}
        <Text style={styles.phone}>{formatPhoneNumber(result.phone)}</Text>
        <View style={styles.iconContainer}>
          {result.is_closed ? (
            <AntDesign name="closecircleo" size={30} color="black" />
          ) : (
            <MaterialIcons name="delivery-dining" size={30} color="black" />
          )}
        </View>
      </View>

      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'white', 
  },
  infoContainer: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  ratingContainer: {
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rating: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  ratingImage: {
    width: 20,
    height: 20,
  },
  phone: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '',
    marginBottom: 10,
  },
  iconContainer: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  reviewCount: { 
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
});
