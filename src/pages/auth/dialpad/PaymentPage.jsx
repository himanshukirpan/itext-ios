import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SwipeButton from "rn-swipe-button";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import PaymentSwiperComponent from "../../../components/PaymentSwiperComponent";

export default (() => {
    const [amount, setAmount] = useState("");
    const recommended = [2, 5, 10, 15, 20, 25, 50];

    return (
        <View className="flex-1 bg-white">
            {/* Balance Header */}
            <View className="bg-[#0c0d23] p-6">
                <Text className="text-white text-lg">Balance</Text>
                <Text className="text-white text-3xl font-bold">£3100.05</Text>
            </View>

            <ScrollView contentContainerStyle={{paddingBottom: 140}}>
                {/* Set Amount Section */}
                <View className="px-5 mt-6">
                    <Text className="text-lg font-semibold text-gray-800">Set amount</Text>
                    <Text className="text-gray-500 mt-1">
                        How much would you like to top up?
                    </Text>

                    {/* Input */}
                    <TextInput
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        className="border border-blue-400 rounded-lg px-4 py-3 mt-4 text-lg text-gray-800"
                    />
                </View>

                {/* Recommended */}
                <View className="px-5 mt-6">
                    <Text className="text-gray-600 mb-3">Recommended</Text>
                    <View className="flex-row flex-wrap gap-3">
                        {recommended.map((val) => (
                            <TouchableOpacity
                                key={val}
                                className={`px-5 py-2 rounded-full border ${
                                    amount == val.toString()
                                        ? "bg-red-500 border-red-500"
                                        : "border-gray-300"
                                }`}
                                onPress={() => setAmount(val.toString())}
                            >
                                <Text
                                    className={`${
                                        amount == val.toString()
                                            ? "text-white font-semibold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    £{val.toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <PaymentSwiperComponent amount={amount}/>
        </View>
    );
});
