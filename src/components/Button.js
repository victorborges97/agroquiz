import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../styles/colors"
import fonts from '../styles/fonts';

export default function Button({ title, ...rest }) {
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={styles.botao}
        {...rest}
    >
        <Text
            style={styles.text_botao}
        >
            { title }
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      height: 56,
  },
  text_botao: {
      color: colors.white,
      fontSize: 16,
  },
});
