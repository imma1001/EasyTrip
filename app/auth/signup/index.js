import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth }from '@/Config/Firebase_config';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true
    });
  }, []);

  const CreateAccount = async () => {
    if (!email || !password || !lastName || !firstName) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Please enter all fields...', ToastAndroid.BOTTOM);
      } else {
        alert('Please enter all fields...');
      }
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔹 Update Firebase Auth Profile
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });

      console.log("User registered successfully!");
      router.push('/auth/login');
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message);
    }
  };

  return (
    <View>
      <Text style={styles.Text}>SignUp Page</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingLeft: 15 }}>First Name</Text>
        <TextInput style={styles.input} placeholder='Enter ..'
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
        />
        <Text style={{ paddingLeft: 15 }}>Last Name</Text>
        <TextInput style={styles.input} placeholder='Enter ..'
          value={lastName}
          onChangeText={(value) => setLastName(value)}
        />
        <Text style={{ paddingLeft: 15 }}>Email</Text>
        <TextInput style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder='Enter Your Email'
        />
        <Text style={{ paddingLeft: 15 }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Password'
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity onPress={CreateAccount} style={styles.button}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ textAlign: 'center', paddingTop: 20 }} onPress={() => router.push('/auth/login')}>
        <Text>Already have an Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: 'rgb(140, 113, 50)',
    textAlign: 'center',
    paddingTop: 20,
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgb(82, 45, 18)',
    color: 'rgba(82, 45, 18, 0.52)',
  },
  button: {
    backgroundColor: 'rgb(88, 75, 65)',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
});
