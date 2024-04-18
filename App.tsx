import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import * as Linking from "expo-linking";
import { Image } from 'expo-image';

export default function App() {
  const openTwitter = () => {
    Linking.canOpenURL('twitter://timeline')
    .then((supported) => {
      if (supported) {
        return Linking.openURL('twitter://timeline');
      } else {
        console.warn("Twitter app is not installed, prompting user to download.");

        Alert.alert(
          'Twitter Is Not Installed',
          'Redirect you to the app download page?',
          [
            {
              text: 'OK',
              onPress: (() => Linking.openURL("https://play.google.com/store/apps/details?id=com.twitter.android")),
              style: 'default'
            },
            {
              text: 'Cancel',
              onPress: (() => { return }),
              style: 'default'
            },
          ]
        )
      }
    })
    .catch((err) => {
      console.error('Failed to open app:', err);
    });
  };

  const openWhatsapp = () => {
    Linking.canOpenURL('whatsapp://send?text=Hello')
    .then((supported) => {
      if (supported) {
        return Linking.openURL('whatsapp://send?text=Hello');
      } else {
        console.warn("Whatsapp app is not installed, prompting user to download.");

        Alert.alert(
          'WhatsApp Is Not Installed',
          'Redirect you to the app download page?',
          [
            {
              text: 'OK',
              onPress: (() => Linking.openURL("https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_ZA&gl=US")),
              style: 'default'
            },
            {
              text: 'Cancel',
              onPress: (() => { return }),
              style: 'default'
            },
          ]
        )
      }
    })
    .catch((err) => {
      console.error('Failed to open app:', err);
    });
  };

  const openGmail = () => {
    Linking.canOpenURL('https://mail.google.com/')
    .then((supported) => {
      if (supported) {
        return Linking.openURL('https://mail.google.com/');
      } else {
        console.warn("Gmail is not installed, prompting user to download.");

        Alert.alert(
          'Gmail Is Not Installed',
          'Redirect you to the app download page?',
          [
            {
              text: 'OK',
              onPress: (() => Linking.openURL("https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en_ZA&gl=US")),
              style: 'default'
            },
            {
              text: 'Cancel',
              onPress: (() => { return }),
              style: 'default'
            },
          ]
        )
      }
    })
    .catch((err) => {
      console.error('Failed to open app:', err);
    });
  };

  const openEmpact = () => {
    Linking.canOpenURL('empactapp://')
    .then((supported) => {
      if (supported) {
        return Linking.openURL('empacapp://');
      } else {
        console.warn("Empact is not installed, prompting user to download.");

        Alert.alert(
          'Empact Is Not Installed',
          'Redirect you to the app download page?',
          [
            {
              text: 'OK',
              onPress: (() => Linking.openURL("https://surveys.empactgroup.co.za/Software/Android/Empact.apk")),
              style: 'default'
            },
            {
              text: 'Cancel',
              onPress: (() => { return }),
              style: 'default'
            },
          ]
        )
      }
    })
    .catch((err) => {
      console.error('Failed to open app:', err);
    });
  };

  return (
    <View style={styles.app}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>App Launcher</Text>

        <View style={styles.container}>
          <TouchableHighlight onPress={() => openWhatsapp()}>
            <Image
                style={styles.image}
                source="https://www.shareicon.net/data/512x512/2016/07/10/119959_whatsapp_512x512.png"
                contentFit="cover"
                transition={1000}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => openTwitter()}>
            <Image
              style={styles.image}
              source="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-512.png"
              contentFit="cover"
              transition={1000}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => openGmail()}>
            <Image
              style={styles.image}
              source="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
              contentFit="cover"
              transition={1000}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => openEmpact()}>
            <Image
              style={styles.image}
              source="https://surveys.empactgroup.co.za/Software/Android/EmpactLogo.png"
              contentFit="cover"
              transition={1000}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, rgba(157,157,157,1) 0%, rgba(110,110,110,1) 50%, rgba(52,52,52,1) 100%)',
    justifyContent: 'center',
  },
  wrapper: {

  },
  heading: {
    marginBottom: 32,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '300',
    letterSpacing: 16
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32
  },
  button: {

  },
  image: {
    width: 64,
    height: 64,
  }
});
