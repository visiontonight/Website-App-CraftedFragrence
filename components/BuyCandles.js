import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function AssetCandle() {
    return (
      <View style={styles.container}>
        <Text>Candle, White, Lemon fragrence</Text>
        <Image style={styles.logo} source={require('../assets/candle.jpg')} />
        <TouchableOpacity
        style={styles.button}
        onPress={this.props.navigation.navigate("PayScreen")}>
        <Text>Press here to buy for 2.50 CHF</Text>
        </TouchableOpacity>

        <Text>Candle, Red, Strawberry fragrence</Text>
        <Image style={styles.logo} source={require('../assets/candle.jpg')} />
        <TouchableOpacity
        style={styles.button}
        onPress={this.props.navigation.navigate("PayScreen")}>
        <Text>Press here to buy for 2.50 CHF</Text>
        </TouchableOpacity>

        <Text>Candle, Green, Apple fragrence</Text>
        <Image style={styles.logo} source={require('../assets/candle.jpg')} />
        <TouchableOpacity
        style={styles.button}
        onPress={this.props.navigation.navigate("PayScreen")}>
        <Text>Press here to buy for 2.50 CHF</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });