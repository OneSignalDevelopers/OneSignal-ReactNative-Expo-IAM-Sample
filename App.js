import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal';
import Constants from "expo-constants";

export default function App() {
  OneSignal.setAppId("f8cc348c-2eb8-44c9-9905-5f1dd35ad547");
  
  //This is what will trigger the In-App Message when the component loads
  OneSignal.addTrigger("level", 5);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
