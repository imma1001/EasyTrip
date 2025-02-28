import { View, Text ,StyleSheet,TouchableOpacity,Image,Linking} from 'react-native'
import React from 'react'

export default function Details({trip}) {
  return (
    <View>
      <Text>
        <Text>Some Hotels in {trip?.tripResponse?.tripDetails?.location}</Text>
                  {/* Check if hotel options exist */}
                  {trip?.tripResponse?.accommodation?.hotelOptions?.length > 0 ? (
                    trip.tripResponse.accommodation.hotelOptions.map((hotel, idx) => (
                      <View key={idx} style={styles.hotelContainer}>
                        {/* Hotel Name */}
                        <Text style={styles.hotelName}>🏨 {hotel?.hotelName || 'N/A'}</Text>
                        <Text style={styles.hotelPrice}>💲 Price: {hotel?.estimatedPricePerNight || 'N/A'}</Text>
                        
                        {/* Hotel Image */}
                        {hotel?.placeImage ? (
                          <Image source={{ uri: hotel.placeImage }} style={styles.hotelImage} resizeMode="cover" />
                        ) : (
                          <Text style={styles.noImage}>No Image Available</Text>
                        )}
        
                        {/* Clickable Booking Link */}
                        {hotel?.bookingURL ? (
                          <TouchableOpacity onPress={() => Linking.openURL(hotel.bookingURL)}>
                            <Text style={styles.bookingLink}>🔗 Book Now</Text>
                          </TouchableOpacity>
                        ) : (
                          <Text style={styles.noBooking}>No Booking URL Available</Text>
                        )}
                      </View>
                    ))
                  ) : (
                    <Text style={styles.noHotels}>No Hotels Available</Text>
                  )}
      </Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tripCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  airline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(114, 115, 116)',
  },
  hotelContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 14,
    color: '#333',
  },
  hotelImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 5,
  },
  bookingLink: {
    marginTop: 5,
    fontSize: 15,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  noHotels: {
    color: 'gray',
    fontStyle: 'italic',
  },
  noImage: {
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  noBooking: {
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 5,
  },
})
