import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const AddTradeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [symbol, setSymbol] = useState('');
  const [profitLoss, setProfitLoss] = useState('');
  const [note, setNote] = useState('');

  const handleSave = () => {
    console.log('Trade Saved:', { symbol, profitLoss, note });
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label, { color: colors.text }]}>Symbol</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.inputText }]}
        value={symbol}
        onChangeText={setSymbol}
      />

      <Text style={[styles.label, { color: colors.text }]}>Profit / Loss</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.inputText }]}
        value={profitLoss}
        onChangeText={setProfitLoss}
        keyboardType="numeric"
      />

      <Text style={[styles.label, { color: colors.text }]}>Notes</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.inputText }]}
        value={note}
        onChangeText={setNote}
      />

      <Pressable onPress={handleSave} style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={[styles.buttonText, { color: colors.text }]}>Save Trade</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginTop: 15,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTradeScreen;
