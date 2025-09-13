import React, { useState, useCallback } from 'react';
import { TextInput, View, Keyboard, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { debounce } from 'lodash';

export default function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');

  const debouncedSearch = useCallback(
    debounce((text) => onSearch(text), 500),
    []
  );

  const handleChange = (text) => {
    setValue(text);
    debouncedSearch(text);
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
      onSearch(value);
    }
  };


  return (
      <View className="flex-row items-center border-2 border-red-500 rounded-lg bg-white">
        {/* Search Icon */}
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="red"
          className="ml-2 mr-2"
        />

        {/* Text Input */}
        <TextInput
          placeholder="Search..."
          value={value}
          onChangeText={handleChange}
          onKeyPress={handleKeyPress}
          autoCapitalize="none"
          returnKeyType="search"
          className={'text-red-500'}
          style={{
            height: 50,                 // fixed height
            fontSize: 18,                  // font size
            lineHeight: 20,
            textAlignVertical: 'center',         // Android vertical center
            flex: 1,
            paddingVertical: 0,                  // no extra padding
          }}
        />

        {/* Optional Clear Button */}
        {value.length > 0 && (
          <TouchableOpacity onPress={() => {
              setValue('')
              onSearch('');
          }}>
            <MaterialCommunityIcons
              name="close-circle"
              size={20}
              color="red"
              className="mr-2"
            />
          </TouchableOpacity>
        )}
      </View>
  );
}
