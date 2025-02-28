import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect,useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Optionfram from './Optionfram'
import {info} from '@/constants/info'
import { DataContext } from '@/constants/Context'

export default function Option() {
    const nav = useNavigation()
    const R = useRouter()

    const {selectedOption, setSelectedOption } = useContext(DataContext)

    useEffect(()=>{
      nav.setOptions({
        headerShown:true,
        headerTransparent:false,
        headerTitle:'Option'
      })
    },[])


  return (
    <View>
      <Text style={{textAlign:'center', fontFamily:'lime',padding:20,marginTop:50}}>What do you prefer</Text>
      <Optionfram option={selectedOption} setOption={setSelectedOption} data={info}/>
      <TouchableOpacity 
      style={{backgroundColor:'#333',alignSelf:'center',padding:20,
        borderWidth:4,borderColor:'#977',borderRadius:10}}
      onPress={()=>R.push('/AboutTrip/Date')}>
        <Text style={{ color: '#ddd',fontFamily:'Montbold' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}