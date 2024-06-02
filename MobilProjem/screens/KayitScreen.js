import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function KayitScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (username === 'Admin') { 
      console.log('Kayıt başarıyla gerçekleşti.');
      Alert.alert('Başarılı', 'Kayıt başarıyla gerçekleşti.', [
        {
          text: 'Tamam',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ]);
      return;
    }

    setLoading(true);
    console.log('Kayıt işlemi başladı.');
    console.log('Kayıt başarılı:', 'Kayıt başarıyla gerçekleşti.'); // Ekle
    Alert.alert('Başarılı', 'Kayıt başarıyla gerçekleşti.', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate('Login');
        },
      },
    ]); // Ekle
    setLoading(false); // Ekle
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? "Yükleniyor..." : "Kayıt Ol"}
        onPress={handleSignUp}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
});
