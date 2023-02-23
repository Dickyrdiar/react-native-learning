import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

interface FieldInputProps {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export const FieldInput: React.FC<FieldInputProps> = ({
  label,
  placeholder,
  secureTextEntry,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={isFocused ? styles.labelFocused : styles.label}>
        {label}
      </Text>
      <TextInput
        style={isFocused ? styles.inputFocused : styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  labelFocused: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: '100%',
  },
  inputFocused: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});
