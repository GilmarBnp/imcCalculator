import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const IMC = () => {
  return (
    <>
   <Text style={styles.imcText}>Calculadora de IMC</Text>
   <SafeAreaView style={styles.container}>
     <View style={styles.imcContainer}/>
  </SafeAreaView>
  </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imcContainer: {
      textAlign:'center',
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imcText: {
      textAlign:'center',
      padding: 10,
      height:60,
      fontWeight:'600',
      fontSize: 25,
      color:'white',
      backgroundColor:'#0E347B',
    },
    text: {
      textAlign:'center',
      fontSize: 12,
    },
});

export default IMC;
