import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Main() {
    const router = useRouter()

  return (
    <SafeAreaView>
      <View>
        <Image style={styles.reactLogo} source={require('@/assets/images/bg.webp')}/>
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Welcome to EGYPTAIR </Text>
            <Text style={styles.container_text}>Save your valuable time at airport and use EGYPTAIR mobile
                app . The service provides chech-in facility to all
                passengers.</Text>
        <TouchableOpacity onPress={()=> router.push('/auth/login')}>
        <Text style={styles.button}> Start Now</Text>
        </TouchableOpacity>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    
    reactLogo: {
      height: 440,
      width: '100%',
      bottom: 0,
      left: 0,
    },
    container:{
        paddingBottom:20,
        borderTopEndRadius:50,
        borderBottomLeftRadius:50,
        backgroundColor:'rgb(237, 235, 216)',
        position:'absolute',
        bottom:-300,
        height:'100%',
        width:'100%',
    },
    container_text:{
        fontFamily:'SemiBoldItalic',
        textAlign:'center',
        color:'rgb(46, 48, 53)',
        padding:10,
        margin:10,

    },
    Text:{
       fontFamily:'SemiBoldItalic',
       fontSize:30,
       color:'rgb(140, 113, 50)',
       textAlign:'center',
       paddingTop:20,
    },
    button:{
        backgroundColor:'rgb(88, 75, 65)',
         color:'rgb(246, 237, 237)',
         padding:10,
         margin:10,
         borderRadius:10,
         textAlign:'center',
         fontFamily:'MediumItalic'
    },
  });
 