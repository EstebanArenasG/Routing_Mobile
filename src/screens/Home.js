import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Estoy en el Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          width: 100,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate('Stack')}
      >
        <Text>Enrutamientos para paginas desde Stack</Text>
      </TouchableOpacity>
    </View>
  );
}
