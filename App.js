/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';

const DARK_COLOR = '#333333';
const LIGHT_COLOR = '#FFFFFF';

const App: () => Node = () => {
  const [isDark, setDark] = useState(false);
  const [rippleColor, setRippleColor] = useState('transparent');

  let background = LIGHT_COLOR;
  let foreground = DARK_COLOR;

  if (isDark) {
    [background, foreground] = [foreground, background];
  }

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaView style={[styles.view, {backgroundColor: background}]}>
        <View>
          <Text style={{color: foreground}}>Text: {foreground}</Text>
          <Text style={{color: foreground}}>Background: {background}</Text>
          <Text style={{color: foreground}}>
            Ripple Color: {JSON.stringify(rippleColor)}
          </Text>
        </View>

        <View>
          <RectButton
            onPress={() => setDark(!isDark)}
            rippleColor={rippleColor}
            style={styles.margin}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>Toggle BG / Text Colors</Text>
            </View>
          </RectButton>

          <RectButton
            onPress={() => setRippleColor('transparent')}
            rippleColor={rippleColor}
            style={styles.margin}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>Set Ripple: transparent</Text>
            </View>
          </RectButton>

          <RectButton
            onPress={() => setRippleColor('#000')}
            rippleColor={rippleColor}
            style={styles.margin}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>Set Ripple: #000</Text>
            </View>
          </RectButton>

          <RectButton
            onPress={() => setRippleColor('rgba(0,0,0,0.5)')}
            rippleColor={rippleColor}
            style={styles.margin}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>
                Set Ripple: rgba(0,0,0,0.5)
              </Text>
            </View>
          </RectButton>

          <RectButton
            onPress={() => setRippleColor('rgba(0,0,0,0.1)')}
            rippleColor={rippleColor}
            style={styles.margin}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>
                Set Ripple: rgba(0,0,0,0.1)
              </Text>
            </View>
          </RectButton>

          <RectButton
            onPress={() => setRippleColor(null)}
            rippleColor={rippleColor}>
            <View accessible accessibilityRole="button" style={styles.btn}>
              <Text style={{color: foreground}}>Set Ripple: null</Text>
            </View>
          </RectButton>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#888888',
  },

  margin: {marginBottom: 6},

  root: {flex: 1},

  row: {flexDirection: 'row'},

  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
