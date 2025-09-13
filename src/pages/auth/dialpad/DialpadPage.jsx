import React, {useState} from "react";
import {
    View, Text, TextInput, TouchableOpacity, Alert, LayoutAnimation, UIManager, Platform, Clipboard,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

// Enable LayoutAnimation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DialpadPage() {
    const [number, setNumber] = useState("");

    const handlePress = (val) => {
        LayoutAnimation.easeInEaseOut();
        if (number.length < 20) {
            setNumber((prev) => prev + val);
        }
    };

    const handleDelete = () => {
        LayoutAnimation.easeInEaseOut();
        setNumber((prev) => prev.slice(0, -1));
    };

    const handleCall = () => {
        if (!number) {
            Alert.alert("No number", "Please enter a number to call");
            return;
        }
        Alert.alert("Calling", number);
    };


    const dialButtons = [["1", "∞"], ["2", ""], ["3", ""], ["4", ""], ["5", ""], ["6", ""], ["7", ""], ["8", ""], ["9", ""], ["*", ""], ["0", "+"], ["#", ""],];

    return (<View className="flex-1 bg-white">


        {/* Dialpad */}
        <View className="flex-1 justify-center px-4">
            {/* Top Number Display */}
            <View style={{width: "100%", alignItems: "center", marginVertical: 16}}>
                <View style={{width: "80%", position: "relative"}}>
                    <TextInput
                        className={''}
                        value={number}
                        onChangeText={(text) => setNumber(text.slice(0, 20))}
                        placeholder=""
                        keyboardType="phone-pad"
                        maxLength={20}
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "#1F2937",
                            textAlign: "center",
                            paddingLeft:0,
                            paddingRight: 40, // space for backspace button
                            borderBottomWidth: 1,
                            borderColor: "#D1D5DB",
                            height: 50,
                        }}
                    />
                    <Text className={`text-center absolute text-lg text-gray-400 top-4 font-bold ${number&&'hidden'}`}>Enter a number with country code</Text>
                    {number.length > 0 && (<TouchableOpacity
                        onPress={handleDelete}
                        style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            bottom: 0,
                            justifyContent: "center",
                            paddingHorizontal: 8,
                        }}
                    >
                        <Icon name="backspace" size={24} color="#4B5563"/>
                    </TouchableOpacity>)}
                </View>
            </View>

            <View className="flex-row flex-wrap justify-center">
                {dialButtons.map(([num, sub], idx) => (<View key={idx} className="w-1/3 items-center py-4">
                    <TouchableOpacity onPress={() => handlePress(num)}>
                        <View
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: 32,
                                borderWidth: 1,
                                borderColor: "#D1D5DB",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{fontSize: 24, color: "#1F2937"}}>{num}</Text>
                        </View>
                    </TouchableOpacity>
                    {sub ? (<Text style={{fontSize: 12, color: "#6B7280", marginTop: 4}}>{sub}</Text>) : null}
                </View>))}
            </View>
        </View>

        {/* Bottom Actions */}
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
            borderTopWidth: 1,
            borderColor: "#E5E7EB"
        }}>

            <TouchableOpacity
                onPress={handleCall}
                style={{
                    backgroundColor: "#DC2626",
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Icon name="phone" size={28} color="#fff"/>
            </TouchableOpacity>
        </View>


    </View>);
}
