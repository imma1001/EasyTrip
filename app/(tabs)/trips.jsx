import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewTrip from '@/components/NewTrip'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '@/Config/Firebase_config';
import UserTripList from '@/components/UserTripList';

export default function Trips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true) // Added loading state
  const user = auth.currentUser

  useEffect(() => {
    if (user) Mytrip()
  }, [user])

  const Mytrip = async () => {
    setLoading(true) // Show loading state
    const q = query(collection(db, "FlightBooking"), where("userEmail", "==", user.email))
    const querySnapshot = await getDocs(q)

    // Collect trips before updating state
    const fetchedTrips = []
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      fetchedTrips.push(doc.data()) // Push data to array
    })

    setTrips(fetchedTrips) // Update state once
    setLoading(false) // Hide loading state
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Your Trips</Text>
        <Text style={styles.plus}>+</Text>
      </View>

      {/* Show loading spinner */}
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      ) : trips.length === 0 ? (
        <NewTrip />
      ) : (
        <UserTripList trips={trips} />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  plus: {
    fontSize: 20,
    backgroundColor: '#000',
    color: '#fff',
    height: 30,
    width: 30,
    borderRadius: 20,
    textAlign: 'center',
  },
  headtext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
    alignSelf: 'center',
  },
})
