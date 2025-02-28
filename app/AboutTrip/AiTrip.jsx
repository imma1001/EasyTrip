import { View, Text } from 'react-native'
import React, { useEffect,useContext } from 'react'
import { api_info } from '@/constants/info'
import { DataContext } from '@/constants/Context'
import { db ,auth } from '../../Config/Firebase_config'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'expo-router'
import { chatSession } from '../../Config/ai'


export default function AiTrip() {
  const R = useRouter()
    const {selectedDate } = useContext(DataContext)
    const {selectedCost } = useContext(DataContext)
    const {selectedOption } = useContext(DataContext)
    const {selectedSearch } = useContext(DataContext)

    const user = auth.currentUser
   

    const GenerateTripByAi =async()=>{
        const replace = api_info
        .replace('{location}',selectedSearch)
        .replace('{Cost}',selectedCost)
        .replace('{Option}',selectedOption)
        .replace('{Date}',selectedDate)
        console.log(replace)
        const result = await chatSession.sendMessage(replace);
        const aiResponse = result.response.text();
        console.log(aiResponse);
  
        const docId = Date.now().toString();

          await setDoc(doc(db, "FlightBooking", docId), {
              userEmail: user.email,
              selectedSearch,
              selectedCost,
              selectedOption,
              selectedDate,
              tripResponse: JSON.parse(aiResponse), // Store AI response as JSON
              timestamp: new Date()
          })}
         R.push('/(tabs)/trips')

    useEffect(()=>{
      GenerateTripByAi()
    },[selectedDate,selectedCost,selectedOption,selectedSearch])


  return (
    <View>
      <Text>AiTrip</Text>
    </View>
  )
}