import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, NativeModules } from 'react-native';

const { HelloKotlin } = NativeModules;

export default function App() {

  const handleOnPress = () => {
    console.log('Press...');
    HelloKotlin.sayHello("Module Kotlin  ", (err: any, message: any)=> {
      if(err) return console.log(err);
      console.log("message",  message);
    })
  }

  const handleButton = () => {
    console.log('Botão...');
    HelloKotlin.sayHello("Funcionou...  ", (err: any, message: any)=> {
      if(err) return console.log(err);
      console.log("message",  message);
    })
  }

  return (
    <View style={styles.container}>
      <Text onPress={handleOnPress} >Esse modulo Kotlin ..</Text>

      <Text>========================</Text>
      <Text>========================</Text>

      <Button 
        onPress={handleButton}
              title="Vai merda"
      />

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
