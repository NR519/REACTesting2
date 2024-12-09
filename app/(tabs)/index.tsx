import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';

const App = () => {
  // State untuk menyimpan data mahasiswa dari API
  const [friends, setFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State untuk loading status
  const [error, setError] = useState<string | null>(null); // State untuk menangani error

  const url = 'https://cors-anywhere.herokuapp.com/https://iotikaindonesia.com/dipa/api/mhs.php';

  // Mengambil data dari API saat komponen pertama kali dimuat
  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) // Parsing JSON dari response
      .then((data) => {
        if (data.status === 'success') {
          setFriends(data.data); // Menyimpan data mahasiswa ke state
        } else {
          setError('Data tidak ditemukan');
        }
        setLoading(false); // Set loading menjadi false setelah data diterima
      })
      .catch((err) => {
        console.error(err); // Menangani error di sini
        setError('Terjadi kesalahan saat mengambil data');
        setLoading(false); // Set loading false meskipun ada error
      });
  }, []); // Menjalankan useEffect hanya sekali saat komponen dimuat

  // Fungsi untuk menampilkan item dalam daftar
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text style={styles.details}>{item.kelas}</Text>
      {item.points && <Text style={styles.points}>Points: {item.points}</Text>}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.header}>
            Berikut adalah 10 orang kawan saya di Prodi SI secara random
          </Text>
          {/* Menampilkan daftar mahasiswa */}
          <FlatList
            data={friends.slice(0, 10)} // Mengambil 10 data pertama dari array
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  points: {
    fontSize: 14,
    color: '#008000',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
