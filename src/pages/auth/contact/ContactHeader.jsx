import {Component} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar, Text, View} from "react-native";
import MenuComponent from "../../../components/MenuComponent";

export default (() => {
    const menuOptions = [
        {label: "Numbers", value: "numbers"},
        {label: "Rates", value: "rates"},
        {label: "Add Credit",value: "credit"
    },];

    const handleMenuSelect = (value) => {
        console.log("Selected:", value);
        alert(`You clicked: ${value}`);
    };
    return <SafeAreaView edges={['top']} className="bg-green-600 relative">
        <StatusBar barStyle="light-content" backgroundColor="#16a34a"/>
        <View className="flex-row justify-between items-center text-center px-4 py-3">
            <Text className="text-xl text-center font-bold text-white">Contacts</Text>

        </View>

        <View className={"absolute right-0 bottom-0"}>
            <MenuComponent options={menuOptions} onSelect={handleMenuSelect}/>
        </View>

    </SafeAreaView>
})