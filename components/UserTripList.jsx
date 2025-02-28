import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Details from './Details'

export default function UserTripList({ trips }) {
  return (
    <View style={styles.container}>
      {trips.map((trip, index) => (
        <View key={index} style={styles.tripCard}>
          {/* Trip Header */}
          <Text style={styles.headerText}>🌍 {trip?.tripResponse?.tripDetails?.location || 'Unknown Destination'}</Text>

          {/* Flight Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✈️ Flight Details</Text>
            <Text style={styles.infoText}>🛫 Airline: {trip?.tripResponse?.flights?.outbound?.airline || 'N/A'}</Text>
            <Text style={styles.infoText}>🎫 Cost/P: ${trip?.tripResponse?.flights?.outbound?.ticketPricePerPerson || 'N/A'}</Text>
            <Text style={styles.infoText}>💰 Total Cost: ${trip?.tripResponse?.flights?.outbound?.estimatedTotalFlightCost || 'N/A'}</Text>

            {/* Booking Link */}
            {trip?.tripResponse?.flights?.outbound?.bookingURL ? (
              <TouchableOpacity onPress={() => Linking.openURL(trip.tripResponse.flights.outbound.bookingURL)}>
                <Text style={styles.linkText}>🔗 Book Flight</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.noBooking}>No Booking URL Available</Text>
            )}
          </View>

          {/* Travelers */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👥 Travelers</Text>
            <Text style={styles.infoText}>{trip?.tripResponse?.tripDetails?.travelers || 'N/A'} people</Text>
          </View>

          {/* Hotel Details */}
          <Details trip={trip} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tripCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  section: {
    marginVertical: 8,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444',
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    marginVertical: 3,
  },
  linkText: {
    marginTop: 5,
    fontSize: 15,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  noBooking: {
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 5,
  },
})
