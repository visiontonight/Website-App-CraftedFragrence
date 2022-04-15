import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetCandle from './components/Asset';




export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        CraftedFragrence
      </Text>
        <AssetCandle />
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.navigation.navigate("BuyCandles")}
      >
        <Text>Press here to see the candles!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "##FFAC1C",
    padding: 10
  }
});
