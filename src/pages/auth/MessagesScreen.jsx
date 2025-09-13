import React, {useMemo, useState} from "react";
import {View, Text, FlatList, TextInput, TouchableOpacity, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";


const messagesData = [
    {id: "1", name: "447701424001", lastMessage: "Hey there!", date: "01 Aug 2025"},
    {id: "2", name: "447701424002", lastMessage: "How are you?", date: "02 Aug 2025"},
    {
        id: "3",
        name: "Amit",
        lastMessage: "See you soon",
        date: "03 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Amit"
    },
    {id: "4", name: "447701424003", lastMessage: "Yes", date: "04 Aug 2025"},
    {
        id: "5",
        name: "Priya",
        lastMessage: "Good morning ☀️",
        date: "05 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Priya"
    },
    {id: "6", name: "447701424004", lastMessage: "Call me", date: "06 Aug 2025"},
    {id: "7", name: "Shiv", lastMessage: "ok", date: "07 Aug 2025", avatar: "https://ui-avatars.com/api/?name=Shiv"},
    {id: "8", name: "447701424005", lastMessage: "Done ✅", date: "08 Aug 2025"},
    {
        id: "9",
        name: "Meena",
        lastMessage: "Thank you 🙏",
        date: "09 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Meena"
    },
    {id: "10", name: "447701424006", lastMessage: "Later", date: "10 Aug 2025"},
    {id: "11", name: "447701424007", lastMessage: "Hi", date: "11 Aug 2025"},
    {
        id: "12",
        name: "Ravi",
        lastMessage: "Let’s go!",
        date: "12 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Ravi"
    },
    {id: "13", name: "447701424008", lastMessage: "No worries", date: "13 Aug 2025"},
    {
        id: "14",
        name: "Neha",
        lastMessage: "See you",
        date: "14 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Neha"
    },
    {id: "15", name: "447701424009", lastMessage: "Ok cool", date: "15 Aug 2025"},
    {
        id: "16",
        name: "Karan",
        lastMessage: "Good night 🌙",
        date: "16 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Karan"
    },
    {id: "17", name: "447701424010", lastMessage: "Busy now", date: "17 Aug 2025"},
    {
        id: "18",
        name: "Pooja",
        lastMessage: "Got it",
        date: "18 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Pooja"
    },
    {id: "19", name: "447701424011", lastMessage: "Ok", date: "19 Aug 2025"},
    {id: "20", name: "Arjun", lastMessage: "👍", date: "20 Aug 2025", avatar: "https://ui-avatars.com/api/?name=Arjun"},
    {id: "21", name: "447701424012", lastMessage: "Sure", date: "21 Aug 2025"},
    {
        id: "22",
        name: "Sneha",
        lastMessage: "Where are you?",
        date: "22 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Sneha"
    },
    {id: "23", name: "447701424013", lastMessage: "Coming", date: "23 Aug 2025"},
    {id: "24", name: "Anil", lastMessage: "😂", date: "24 Aug 2025", avatar: "https://ui-avatars.com/api/?name=Anil"},
    {id: "25", name: "447701424014", lastMessage: "Done", date: "25 Aug 2025"},
    {
        id: "26",
        name: "Rohit",
        lastMessage: "All good",
        date: "26 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Rohit"
    },
    {id: "27", name: "447701424015", lastMessage: "Cool", date: "27 Aug 2025"},
    {
        id: "28",
        name: "Deepa",
        lastMessage: "Miss you",
        date: "28 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Deepa"
    },
    {id: "29", name: "447701424016", lastMessage: "Yes sure", date: "29 Aug 2025"},
    {
        id: "30",
        name: "Manoj",
        lastMessage: "Ok done",
        date: "30 Aug 2025",
        avatar: "https://ui-avatars.com/api/?name=Manoj"
    },
    {id: "31", name: "447701424017", lastMessage: "What’s up?", date: "31 Aug 2025"},
    {
        id: "32",
        name: "Geeta",
        lastMessage: "Love it ❤️",
        date: "01 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Geeta"
    },
    {id: "33", name: "447701424018", lastMessage: "Yup", date: "02 Sep 2025"},
    {
        id: "34",
        name: "Varun",
        lastMessage: "Lol",
        date: "03 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Varun"
    },
    {id: "35", name: "447701424019", lastMessage: "Hmm", date: "04 Sep 2025"},
    {
        id: "36",
        name: "Nisha",
        lastMessage: "Be there",
        date: "05 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Nisha"
    },
    {id: "37", name: "447701424020", lastMessage: "Ok cool", date: "06 Sep 2025"},
    {
        id: "38",
        name: "Vikas",
        lastMessage: "Ping me",
        date: "07 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Vikas"
    },
    {id: "39", name: "447701424021", lastMessage: "Got it", date: "08 Sep 2025"},
    {
        id: "40",
        name: "Sunita",
        lastMessage: "See you later",
        date: "09 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Sunita"
    },
    {id: "41", name: "447701424022", lastMessage: "Ok", date: "10 Sep 2025"},
    {id: "42", name: "Ajay", lastMessage: "😊", date: "11 Sep 2025", avatar: "https://ui-avatars.com/api/?name=Ajay"},
    {id: "43", name: "447701424023", lastMessage: "Nope", date: "12 Sep 2025"},
    {id: "44", name: "Renu", lastMessage: "Haha", date: "13 Sep 2025", avatar: "https://ui-avatars.com/api/?name=Renu"},
    {id: "45", name: "447701424024", lastMessage: "Yes", date: "14 Sep 2025"},
    {
        id: "46",
        name: "Suresh",
        lastMessage: "Later",
        date: "15 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Suresh"
    },
    {id: "47", name: "447701424025", lastMessage: "Ok done", date: "16 Sep 2025"},
    {
        id: "48",
        name: "Kavita",
        lastMessage: "Let’s meet",
        date: "17 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Kavita"
    },
    {id: "49", name: "447701424026", lastMessage: "Hmm ok", date: "18 Sep 2025"},
    {
        id: "50",
        name: "Raj",
        lastMessage: "Perfect",
        date: "19 Sep 2025",
        avatar: "https://ui-avatars.com/api/?name=Raj"
    },
];

export default function MessagesScreen() {

    const [messages, setMessages] = useState(messagesData);
    const [searchText, setSearchText] = useState('');

    // Filtered messages
    const filteredMessages = useMemo(() => {
        if (!searchText) return messages;
        return messages.filter(
            (msg) =>
                msg.name.toLowerCase().includes(searchText.toLowerCase()) ||
                msg.lastMessage.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText, messages]);
    return (
        <View className="flex-1 bg-white">
            {/* Header */}


            {/* Search */}
            <View className="px-4 py-2">
                <SearchInput onSearch={(value) => setSearchText(value)}/>
            </View>

            {/* Messages List */}
            <FlatList
                data={filteredMessages}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
                        {item.avatar ? (
                            <Image source={{uri: item.avatar}} className="w-10 h-10 rounded-full"/>
                        ) : (
                            <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center">
                                <Text className="text-red-600 font-bold text-lg">
                                    {item.name[0]}
                                </Text>
                            </View>
                        )}
                        <View className="flex-1 ml-3">
                            <Text className="font-semibold">{item.name}</Text>
                            <Text className="text-gray-500">{item.lastMessage}</Text>
                        </View>
                        <Text className="text-red-500">{item.date}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Floating Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 bg-red-600 rounded-full w-14 h-14 items-center justify-center">
                <Text className="text-white text-2xl">+</Text>
            </TouchableOpacity>
        </View>
    );
}
