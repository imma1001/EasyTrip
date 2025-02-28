import { View, Text ,TouchableOpacity} from 'react-native'
import React, { useContext,useEffect } from 'react'
import CalendarPicker from 'react-native-calendar-picker'
import { useNavigation,useRouter } from 'expo-router'
import { DataContext } from '@/constants/Context'

export default function DateScreen() {
    const nav = useNavigation()
        const R = useRouter()
    
        useEffect(()=>{
          nav.setOptions({
            headerShown:true,
            headerTransparent:false,
            headerTitle:'Option'
          })
        },[])

  const {selectedDate, setSelectedDate } = useContext(DataContext)

  // Function to update state (prevents infinite loop)
  const handleDateChange = (date) => {
    console.log("Selected Date:", date)
    setSelectedDate(date.toString())
  }

  return (
    <View>
      <Text style={{ textAlign: 'left', fontFamily: 'Montmedium', fontSize: 20, margin: 30 }}>
        Choose A Date
      </Text>
      <CalendarPicker 
        onDateChange={handleDateChange}
        allowRangeSelection={true}
        minDate={new Date()
        
        }
      />
      {selectedDate && (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Selected Date: {selectedDate}
        </Text>
      )}
      <TouchableOpacity 
            style={{backgroundColor:'#333',alignSelf:'center',padding:20,marginTop:20}}
            onPress={()=>R.push('/AboutTrip/Cost')}>
              <Text style={{ color: '#ddd',fontFamily:'Montbold' }}>Continue</Text>
            </TouchableOpacity>
    </View>
  )
}
