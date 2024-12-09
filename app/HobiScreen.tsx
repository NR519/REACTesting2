import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router'; // Mengimpor useRouter

// Tipe untuk Hobi
interface Hobby {
  id: string;
  name: string;
  imageUri: string;
}

// Daftar hobi beserta gambar
const hobbies: Hobby[] = [
  {
    id: '1',
    name: 'Membaca Komik',
    imageUri: 'https://asset-2.tstatic.net/medan/foto/bank/images/jokowi-baca-komik.jpg', // Ganti dengan URL gambar yang valid
  },
  {
    id: '2',
    name: 'Bermain Game',
    imageUri: 'https://media.suara.com/pictures/970x544/2022/06/24/84069-ilustrasi-bermain-game-mobile-legends.jpg', // Ganti dengan URL gambar yang valid
  },
  {
    id: '3',
    name: 'Menonton Film',
    imageUri: 'https://media.suara.com/pictures/970x544/2020/06/19/46234-menonton-film-shutterstock.jpg', // Ganti dengan URL gambar yang valid
  },
];

export default function HobiScreen() {
  const router = useRouter(); // Mendapatkan instance router

  // Fungsi untuk render setiap item hobi
  const renderHobby = ({ item }: { item: Hobby }) => (
    <View style={styles.hobbyItem}>
      <Image source={{ uri: item.imageUri }} style={styles.hobbyImage} />
      <Text style={styles.hobbyName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Hobi Saya</Text>
      
      {/* Daftar hobi dengan gambar */}
      <FlatList
        data={hobbies}
        renderItem={renderHobby}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

    </View>
  );
}

// Styling untuk halaman HobiScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
  },
  hobbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  hobbyImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Membuat gambar berbentuk lingkaran
    marginRight: 20,
  },
  hobbyName: {
    fontSize: 18,
  },
});
