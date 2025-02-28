import { View, Text, StyleSheet, TouchableOpacity, TextInput,ToastAndroid } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect ,useState} from 'react'
import { useNavigation, useRouter } from 'expo-router';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/Config/Firebase_config';

export default function LoginPage() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true
    })
  },[])
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
 

  const LoginAccount =()=>{

    if (!email || !password) {
      ToastAndroid.show('Please Enter all fields...', ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      router.push('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
  return (
    <View>
      <Text style={styles.Text}>Login Page</Text>
      <View style={{marginTop:20}}>
        <Text style={{paddingLeft:15}}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Your Email'
        onChangeText={(value) => setEmail(value)} value={email}></TextInput>
        <Text style={{paddingLeft:15}}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Password'
        onChangeText={(value) => setPassword(value)} value={password}></TextInput>
        <TouchableOpacity onPress={LoginAccount} style={styles.button}>Login</TouchableOpacity>
            </View>
            <TouchableOpacity style={{textAlign:'center', paddingTop:20}} onPress={()=> router.replace('/auth/signup')}> Make an Account</TouchableOpacity>
            
              <View style={{ paddingTop: 30,flexDirection: 'row',justifyContent: 'center'}}>
              <Text style={styles.buttongoogle}>
              <AntDesign style={{padding:10}}name="google" size={20} />
              Sign in with Google</Text>
              <Text style={styles.buttonface}>
              <AntDesign style={{padding:10}} name="facebook-square" size={20} />
              Sign in with FaceBook</Text>
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Text:{
        fontFamily:'SemiBoldItalic',
        fontSize:30,
        color:'rgb(140, 113, 50)',
        textAlign:'center',
        paddingTop:20,
     },
     buttonface:{
        backgroundColor:'rgb(82, 45, 18)',
        color:'rgb(103, 171, 240)',
        padding:10,
        margin:10,
        borderRadius:10,
        textAlign:'center',
        fontFamily:'MediumItalic'
     },
     buttongoogle:{
         backgroundColor:'rgb(82, 45, 18)',
         color:'rgb(233, 72, 72)',
         padding:10,
         margin:10,
         borderRadius:10,
         textAlign:'center',
         fontFamily:'MediumItalic'
      },
      input:{
         padding:10,
         margin:10,
         borderWidth:2,
         borderRadius:10,
         borderColor:'rgb(82, 45, 18)',
         color:'rgba(82, 45, 18, 0.52)',
         fontFamily:'MediumItalic',
      },
      button:{
        backgroundColor:'rgb(88, 75, 65)',
         color:'rgb(246, 237, 237)',
         padding:20,
         margin:10,
         borderRadius:10,
         textAlign:'center',
         fontFamily:'MediumItalic'
    },
})