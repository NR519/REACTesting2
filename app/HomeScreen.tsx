import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router'; // Mengimpor useRouter

export default function HouseScreen() {
  const router = useRouter(); // Mendapatkan instance router

  return (
    <View style={styles.container}>
      {/* Foto Profil menggunakan URL */}
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/163378655?v=4' }}  // Gantilah URL ini dengan URL gambar yang valid
        style={styles.profileImage}
      />
      
      {/* Nama */}
      <Text style={styles.name}>Nama: Naufal Rifki Nugraha</Text>
      
      {/* NIM */}
      <Text style={styles.nim}>NIM: 222505053</Text>
      
    </View>
  );
}

// Styling untuk halaman profil
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat gambar menjadi bentuk lingkaran
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nim: {
    fontSize: 16,
    marginBottom: 20,
  },
});
