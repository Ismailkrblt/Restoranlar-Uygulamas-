import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../Api/yelp';

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
    phoneNumber = phoneNumber.replace(/^[\+()\s-]*/g, '');
    const formattedNumber = phoneNumber.slice(1);
    if (formattedNumber.length < 7) {
      return formattedNumber;
    }
    const formatted434 = `${formattedNumber.slice(0, 4)}-${formattedNumber.slice(4, 7)}-${formattedNumber.slice(7)}`;
    return formatted434;
  };

  const locationInfo = `${result.location.address1}, ${result.location.city}, ${result.location.state}`.replace(/, 34$/, '');

  const isOpen = result.hours && result.hours[0].is_open_now;
  const openStatus = isOpen ? 'İşletme şu anda açık' : 'İşletme şu anda kapalı';

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{result.name}</Text>
        {result.rating && (
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{result.rating} ★ </Text>
            <Image
              source={{ uri: result.image_url }} // Burada image_url kullanılmalı
              style={styles.ratingImage}
            />
            {result.review_count && (
              <Text style={styles.reviewCount}>({result.review_count} Yorumlar)</Text>
            )}
          </View>
        )}
        <Text style={styles.phone}>{formatPhoneNumber(result.phone)}</Text>
        <Text style={styles.location}>{locationInfo}</Text>
        <Text style={styles.hours}>{openStatus}</Text>
      </View>

      <FlatList
        data={result.photos} // result.photos yerine kullanıldı
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', 
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rating: {
    fontSize: 18,
    marginRight: 5,
  },
  ratingImage: {
    width: 20,
    height: 20,
  },
  phone: {
    fontSize: 20,
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
  },
  hours: {
    fontSize: 16,
    color: 'black',
  },
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  reviewCount: { 
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
});
