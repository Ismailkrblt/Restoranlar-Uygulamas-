import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  //   console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Uygun Fiyatlar"
        results={filterResultsByPrice('₺')}
      />
      <ResultsList
        title="Ortalama Fiyatlar"
        results={filterResultsByPrice('₺₺')}
      />
      <ResultsList
        title="Yüksek Fiyatlar"
        results={filterResultsByPrice('₺₺₺')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
