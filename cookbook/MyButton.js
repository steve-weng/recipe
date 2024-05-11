import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const MyButton = props => {
    const length = props.title.length;
    const { width, height } = Dimensions.get('window');

    return (
        <TouchableOpacity style={[styles.button, {width: props.width}]} onPress={props.onPressFunction}>
            <Text style={[styles.buttonText, {fontSize: width * 0.045}]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFA800",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9,
    },
    buttonText: {
    color: 'white',
    fontSize: 18, // make this flexible
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "PlayfairDisplay_800ExtraBold",
  },
});

export default MyButton;