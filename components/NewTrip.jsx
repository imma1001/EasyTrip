import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function NewTrip() {
    const R = useRouter()
  return (
    <View style={styles.container}>
        <Text></Text>
      <Text style={{fontFamily:'SemiBold'}}>You don't have any trip yet</Text>
        <Text style={{paddingTop:15,fontFamily:'Montbold',textAlign:'center' ,color:'#777aaa'}}>Make your first Trip NOW with us</Text>
        <TouchableOpacity onPress={()=>R.push('/AboutTrip/SearchTrip')} style={styles.button}>Booking</TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        margin:50,
        padding:20,
        alignItems:'center'
    },
    button:{
        backgroundColor:'rgb(20, 19, 19)',
         color:'rgb(246, 237, 237)',
         padding:20,
         margin:10,
         borderRadius:10,
         textAlign:'center',
         fontFamily:'Montbold',
    }
})