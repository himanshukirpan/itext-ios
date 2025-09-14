import React from "react";
import {View, Text, TouchableOpacity, FlatList, Image} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MenuComponent from "../../../components/MenuComponent";
import {useNavigation} from "@react-navigation/native";
import ButtonComponent from "../../../components/ButtonComponent";

export default (() => {
    const numbers = [
        {id: "1", name: "Bharat", number: "+447701424003", primary: true},
        {id: "2", name: "Minal", number: "+447701424006", primary: false},
        {id: "3", name: "Dnyanada", number: "+447701424010", primary: false},
        {id: "4", name: "Ishant", number: "+447701424015", primary: false},
        {id: "5", name: "Arohi", number: "+447701424016", primary: false},
    ];

    const navigation = useNavigation();
    const menuOptions = [
        {label: "Numbers", value: "numbers"},
        {label: "Rates", value: "my_number"},
        {label: "Add Credit", value: "pricing"},
        {label: "Payment", value: "payment"},
        {label: "Select Number", value: "select_number"}
    ];

    const handleMenuSelect = (value) => {
        try {
            navigation.navigate(value)
        } catch (err) {
            console.log(err);
        }
    };
    const renderItem = ({item}) => (
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-300">
            {/* Flag */}
            <Image
                source={{uri: "https://flagcdn.com/w40/gb.png"}}
                className="w-10 h-10 rounded-full"
            />

            {/* Name & Primary */}
            <View className="flex-1 ml-3">
                <Text className="text-gray-800 font-medium">{item.name}</Text>
                {item.primary && (
                    <Text className="text-green-600 text-xs">Primary Number</Text>
                )}
            </View>

            {/* Number */}
            <Text className="text-gray-800">{item.number}</Text>

            {/* More Icon */}
            <TouchableOpacity className="ml-2">
                <MenuComponent color="#666" options={menuOptions} onSelect={handleMenuSelect}/>
            </TouchableOpacity>
        </View>
    );

    return (
        <View className="flex-1 bg-white">

            {/* List */}
            <FlatList data={numbers} keyExtractor={(item) => item.id} renderItem={renderItem}/>

            {/* Buy Number Button */}
            <ButtonComponent  className="mb-10" label="BUY NUMBER" size="large" />

        </View>
    );
});
