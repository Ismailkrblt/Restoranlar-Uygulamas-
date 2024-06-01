import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function KayitScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    console.log('Kayıt işlemi başladı.');
    try {
      const response = await fetch('http://192.168.1.88:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      console.log('Sunucudan yanıt bekleniyor.');

      const data = await response.json();

      if (response.ok) {
        console.log('Kayıt başarılı:', data.message);
        Alert.alert('Başarılı', data.message);
        navigation.navigate('Login');
      } else {
        console.error('Sunucu hatası:', data.error || 'Bilinmeyen hata');
        Alert.alert('Hata', data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      console.error('Fetch hatası:', error);
      Alert.alert('Hata', 'Sunucu ile iletişimde bir hata oluştu.');
    } finally {
      setLoading(false);
      console.log('Kayıt işlemi bitti.');
    }
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
