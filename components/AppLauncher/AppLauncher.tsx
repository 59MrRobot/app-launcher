import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const AppLauncher = () => {
  const openApp = (packageName: string) => {
    Linking.openURL(`package://${packageName}`).catch((err) => {
      console.error('Failed to open app:', err);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App Launcher</Text>
      <Button title="Open App 1" onPress={() => openApp('com.example.app1')} />
      <Button title="Open App 2" onPress={() => openApp('com.example.app2')} />
      {/* Add buttons/icons for other apps */}
    </View>
  );
};

export default AppLauncher;