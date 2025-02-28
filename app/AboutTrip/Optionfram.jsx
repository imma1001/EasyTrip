import { View, Text ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Optionfram({option,setOption,data}) {
  return (
    <View>
      <FlatList
      style={{marginVertical:20,padding:20,}}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item})=>(
        <View style={[
        {display:'flex',
         flexDirection:'row',
         justifyContent:'space-between',
         padding:10 ,
         backgroundColor:'#dfdee0',
         marginVertical:10,
         borderRadius:10},
         option==item.title&&{ borderWidth: 2, borderColor: '#111' }]}>
         <View>
            <TouchableOpacity onPress={()=>setOption(item.title)} style={{fontSize:15 ,fontFamily:'Montbold'}}>{item.title}</TouchableOpacity>
            <Text style={{fontSize:15,color:'#444777'}}>{item.description}</Text>
         </View>
         <View>
             <Text style={{fontSize:30}}>{item.icon}</Text>
         </View>
         </View>
      )}
      />
    </View>
  )
}