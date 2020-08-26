import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from '../../hooks/useState';

const CardInfo = () => {
  const { age, dispatchOnAgeDown, dispatchOnAgeUp } = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Info: {age}</Text>
      <View style={styles.wrapperButton}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={dispatchOnAgeUp}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={dispatchOnAgeDown}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>DOWN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CardInfo };

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
