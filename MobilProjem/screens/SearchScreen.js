import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Uygun Restaurantlar"
        results={filterResultsByPrice('₺')}
      />
      <ResultsList
        title="Ortalama Restaurantlar"
        results={filterResultsByPrice('₺₺')}
      />
      <ResultsList
        title="Pahalı Restaurantlar"
        results={filterResultsByPrice('₺₺₺')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
