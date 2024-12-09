import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Mengimpor useRouter

export default function AboutScreen() {
  const router = useRouter(); // Mendapatkan instance router

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Saya</Text>

      <Text style={styles.description}>
        Hai, nama saya Naufal Rifki Nugraha. Saya adalah seorang pengembang perangkat lunak dengan pengalaman lebih dari 5
        tahun dalam mengembangkan aplikasi mobile menggunakan React Native dan Expo. Saya sangat tertarik dalam
        teknologi dan terus belajar hal baru untuk meningkatkan keterampilan saya. Dalam pekerjaan saya, saya selalu
        berusaha untuk menciptakan aplikasi yang tidak hanya fungsional, tetapi juga memiliki antarmuka yang ramah
        pengguna dan mudah digunakan.
      </Text>

      <Text style={styles.description}>
        Di luar pekerjaan, saya suka membaca komik, bermain game, dan menonton film. Saya juga
        berkomitmen untuk berbagi pengetahuan melalui blog dan tutorial online untuk membantu pengembang lain yang
        baru memulai perjalanan mereka di dunia pengembangan perangkat lunak.
      </Text>

    </ScrollView>
  );
}

// Styling untuk halaman AboutScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
