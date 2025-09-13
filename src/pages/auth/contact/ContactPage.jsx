import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchInput from "../../../components/SearchInput";

const contactsData = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
  { id: '4', name: 'David' },
  { id: '5', name: 'Eve' },
  { id: '6', name: 'Frank' },
  { id: '7', name: 'Grace' },
  { id: '8', name: 'Hannah' },
  { id: '9', name: 'Ian' },
  { id: '10', name: 'Jack' },
  { id: '11', name: 'Karen' },
  { id: '12', name: 'Leo' },
  { id: '13', name: 'Mona' },
  { id: '14', name: 'Nina' },
  { id: '15', name: 'Oscar' },
  { id: '16', name: 'Paul' },
  { id: '17', name: 'Quinn' },
  { id: '18', name: 'Rachel' },
  { id: '19', name: 'Steve' },
  { id: '20', name: 'Tracy' },
  { id: '21', name: 'Uma' },
  { id: '22', name: 'Victor' },
  { id: '23', name: 'Wendy' },
  { id: '24', name: 'Xander' },
  { id: '25', name: 'Yara' },
  { id: '26', name: 'Zane' },
  { id: '27', name: 'Liam' },
  { id: '28', name: 'Sophia' },
  { id: '29', name: 'Mason' },
  { id: '30', name: 'Ava' },
];

export default (() => {
  const [searchText, setSearchText] = useState('');

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderContact = ({ item }) => (
    <View className="flex-row items-center justify-between p-4 border-b border-gray-300">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
          <Text className="text-red-500 text-lg">{item.name[0].toUpperCase()}</Text>
        </View>
        <Text className="ml-4 text-black text-base">{item.name}</Text>
      </View>
      <View className="flex-row space-x-4">
        <TouchableOpacity>
          <MaterialIcons name="message" size={24} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="call" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
    {/* Search */}
            <View className="px-4 py-2">
                <SearchInput onSearch={(value) => setSearchText(value)}/>
            </View>
      {/* Contacts List */}
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderContact}
      />
    </View>
  );
});
