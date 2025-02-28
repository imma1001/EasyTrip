import { View, Text ,TouchableOpacity} from 'react-native'
import React ,{ useContext, } from 'react'
import { DataContext } from '@/constants/Context'
import { useRouter } from 'expo-router'

export default function Review() {
     const R = useRouter()
    const {selectedDate } = useContext(DataContext)
    const {selectedCost } = useContext(DataContext)
    const {selectedOption } = useContext(DataContext)
    const {selectedSearch } = useContext(DataContext)

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'lime', padding: 20, marginTop: 30 }}>
        Review Your Trip
      </Text>
      <Text style={{ fontFamily: 'Montbold', padding: 20, marginTop: 30 }}>
        Check Your Selection
      </Text>
      <View style={{ padding: 20 ,backgroundColor:'#ccc',margin:20,borderRadius:10 }}>
      <View style={{ marginVertical: 15, display: 'flex', flexDirection: 'row',gap:20  }}>
          <Text style={{ fontSize: 30 }}>✅</Text>
          <Text style={{ fontFamily: 'Montbold' }}>Your Destination</Text>
        </View>
        <Text style={{ fontFamily: 'MediumItalic', color: 'gray', fontSize: 20,marginLeft:20 }}>
          {selectedSearch ? selectedSearch : <Text style={{ fontFamily: 'MediumItalic', color: 'red', fontSize: 20 ,marginLeft:20}}>Not Selected</Text>}
        </Text>
        {/* Duration of the Trip */}
        <View style={{ marginVertical:15, display: 'flex', flexDirection: 'row',gap:20}}>
          <Text style={{ fontSize: 30 }}>📆</Text>
          <Text style={{ fontFamily: 'Montbold' }}>The Duration of your Trip</Text>
        </View>
        <Text style={{ fontFamily: 'MediumItalic', color: 'gray', fontSize: 20,marginLeft:20 }}>
          {selectedDate ? selectedDate : <Text style={{ fontFamily: 'MediumItalic', color: 'red', fontSize: 20 ,marginLeft:20}}>Not Selected</Text>}
        </Text>

        {/* Selected Options */}
        <View style={{ marginVertical: 15, display: 'flex', flexDirection: 'row',gap:20  }}>
          <Text style={{ fontSize: 30 }}>✅</Text>
          <Text style={{ fontFamily: 'Montbold' }}>Your Options</Text>
        </View>
        <Text style={{ fontFamily: 'MediumItalic', color: 'gray', fontSize: 20,marginLeft:20 }}>
          {selectedOption ? selectedOption : <Text style={{ fontFamily: 'MediumItalic', color: 'red', fontSize: 20 ,marginLeft:20}}>Not Selected</Text>}
        </Text>

        {/* Budget */}
        <View style={{ marginVertical: 15, display: 'flex', flexDirection: 'row',gap:20  }}>
          <Text style={{ fontSize: 30 }}>💸</Text>
          <Text style={{ fontFamily: 'Montbold' }}>The Budget</Text>
        </View>
        <Text style={{ fontFamily: 'MediumItalic', color: 'gray', fontSize: 20 ,marginLeft:20}}>
          {selectedCost ? selectedCost : <Text style={{ fontFamily: 'MediumItalic', color: 'red', fontSize: 20 ,marginLeft:20}}>Not Selected</Text>}
        </Text>
      </View>
      <TouchableOpacity 
            style={{backgroundColor:'#333',alignSelf:'center',padding:20,
              borderWidth:4,borderColor:'#977',borderRadius:10}}
            onPress={()=>R.push('/AboutTrip/AiTrip')}>
              <Text style={{ color: '#ddd',fontFamily:'Montbold' }}>Continue</Text>
            </TouchableOpacity>
    </View>
  )
}