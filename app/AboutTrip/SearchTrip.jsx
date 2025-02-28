import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { DataContext } from '@/constants/Context';

export default function SearchTrip() {
  const nav = useNavigation();
  const R = useRouter();
  const { selectedSearch, setSelectedSearch } = useContext(DataContext);

  useEffect(() => {
    nav.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'Montbold', textAlign: 'center' }}>SearchTrip</Text>

      <TextInput
        style={{
          padding: 10,
          marginVertical: 10,
          width: '80%',
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'rgb(82, 45, 18)',
          color: '#000',
          fontFamily: 'MediumItalic',
          alignSelf: 'center',
        }}
        placeholder="Enter search term"
        placeholderTextColor="gray"
        value={selectedSearch}
        onChangeText={(text) => setSelectedSearch(text)} // This ensures you can type in the input field
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#333',
          alignSelf: 'center',
          padding: 20,
          borderWidth: 4,
          borderColor: '#977',
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => R.push('/AboutTrip/Option')}
      >
        <Text style={{ color: '#ddd', fontFamily: 'Montbold' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
