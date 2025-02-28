import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Login from '@/components/Login';
import { auth } from '@/Config/Firebase_config';
import { Redirect } from 'expo-router';

export default function HomeScreen() {
  const user = auth.currentUser
  return (
    
    <ThemedView>
      {user?<Login/>:<Redirect href={'/auth/login'}/>}
        
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
