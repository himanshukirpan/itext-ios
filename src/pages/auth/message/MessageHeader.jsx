import {Component} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar, Text, View} from "react-native";
import MenuComponent from "../../../components/MenuComponent";

export default (() => {

    return <SafeAreaView edges={['top']} className="bg-green-600">
        <StatusBar barStyle="light-content" backgroundColor="#16a34a"/>
        <View className="flex-row justify-between items-center px-4 py-3">
            <Text className="text-xl font-bold text-white">Messages</Text>
            <Text className="text-white font-semibold">My Balance: £3100.05</Text>
        </View>
    </SafeAreaView>
})