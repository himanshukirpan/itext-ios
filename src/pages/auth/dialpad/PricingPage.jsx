import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Enable animation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default (() => {
    const [activeTab, setActiveTab] = useState("SMS");
    const [expandedId, setExpandedId] = useState(null);

    const countries = [
        {id: "1", flag: "🇦🇺", name: "Australia", sms: "Hello from Australia"},
        {id: "2", flag: "🇨🇱", name: "Chile", sms: "This is a dummy SMS"},
        {id: "3", flag: "🇨🇿", name: "Czech Republic", sms: "Random message here"},
        {id: "4", flag: "🇩🇰", name: "Denmark", sms: "Test SMS content"},
        {id: "5", flag: "🇫🇮", name: "Finland", sms: "Sample text for SMS"},
    ];

    const toggleExpand = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <View className="flex-1 bg-white">
            {/* Tabs */}
            <View className="flex-row border-gray-200">
                {["SMS", "CALL"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        className="flex-1 items-center py-3"
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text
                            className={`text-base font-semibold ${
                                activeTab === tab ? "text-red-600" : "text-gray-500"
                            }`}
                        >
                            {tab}
                        </Text>
                        {activeTab === tab && (
                            <View className="h-0.5 w-full bg-red-600 mt-2"/>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            {/* SMS Tab */}
            <View className={`${activeTab !== "SMS" && "hidden"} flex-1`}>
                {countries.length > 0 ? (
                    <FlatList
                        data={countries}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <View className="border-b border-gray-100">
                                <TouchableOpacity
                                    className="flex-row items-center justify-between px-4 py-4"
                                    onPress={() => toggleExpand(item.id)}
                                >
                                    <View className="flex-row items-center space-x-3">
                                        <Text className="text-lg">{item.flag}</Text>
                                        <Text className="text-base text-gray-800">{item.name}</Text>
                                    </View>
                                    <MaterialIcons
                                        name={expandedId === item.id ? "arrow-drop-up" : "arrow-drop-down"}
                                        size={24}
                                        color="#333"
                                    />
                                </TouchableOpacity>

                                {expandedId === item.id && (
                                    <View className="px-12 pb-3">
                                        <Text className="text-sm text-gray-500">{item.sms}</Text>
                                    </View>
                                )}
                            </View>
                        )}
                    />
                ) : (
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-gray-400 text-base">No SMS found</Text>
                    </View>
                )}
            </View>

            {/* CALL Tab */}
            <View
                className={`${activeTab !== "CALL" && "hidden"} flex-1 items-center justify-center`}
            >
                <Text className="text-gray-400 text-base">No Calls found</Text>
            </View>
        </View>
    );
});
