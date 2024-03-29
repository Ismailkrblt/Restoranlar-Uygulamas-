import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';



export default function SearchScreen() {
  const [searchApi,results] = useResults()
  console.log(results)
  
  const filterResultsByPrice = (price) => {
    return results.filter((results)=>{
      return results.price === price;
  });
};
  return (
    <View>
      <SearchBar />
      <ResultsList title="Uygun Fiyatlı Restaurantlar" results={filterResultsByPrice('₺')}/>
      <ResultsList title="Ortalama Fiyatlı Restaurantlar" results={filterResultsByPrice('₺₺')}/>
      <ResultsList title="Pahalı Fiyatlı Restaurantlar" results={filterResultsByPrice('₺₺₺')}/>
    </View>
  );
}

const styles = StyleSheet.create({});
