import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VoiceBotButton } from 'voicebot-react-native-cli'; 

export default function App() {
  return (
    <View style={styles.container}>
      <VoiceBotButton voicebot_id={"fa1ff3a4-2c80-45b5-9601-f96e4ed2f54b"} caller_id={"shubham1"} caller_name={"shubham"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});