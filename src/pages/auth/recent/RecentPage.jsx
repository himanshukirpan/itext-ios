import React from "react";
import {SafeAreaView, View, Text, FlatList, TouchableOpacity, StatusBar} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const recents = [
    {id: "1", name: "0000", number: "+918793835769", time: "Today 16:06", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
    {id: "2", name: "918793835769", number: "+918793835768", time: "Today 16:01", duration: "00:00"},
    {id: "3", name: "918793835769", number: "+918793835768", time: "Today 15:56", duration: "00:00"},
    {id: "4", name: "918793835769", number: "+918793835768", time: "Today 15:37", duration: "00:00"},
];

export default (() => {
    const renderItem = ({item}) => (
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-300">
            <View className="flex-row items-center space-x-3">
                <View className="w-12 h-12 rounded-full border-2 border-red-600 justify-center items-center">
                    <Icon name="person" size={24} color="red"/>
                    <View className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-red-600">
                        <Icon name="call" size={12} color="red"/>
                    </View>
                </View>
                <View className={'pl-4'}>
                    <Text className="font-bold text-gray-900">{item.name}</Text>
                    <Text className="text-gray-500">{item.number}</Text>
                </View>
            </View>
            <View className="items-end">
                <Text className="text-gray-500">{item.time}</Text>
                <Text className="text-gray-500">{item.duration}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">


            {/* Recents List */}
            <FlatList
                data={recents}
                keyExtractor={(item,index) => index}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
})
