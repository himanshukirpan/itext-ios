import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import IndexStack from './src/stack/IndexStack';
import {ActivityIndicator} from "react-native-paper";
import {useAuthStore} from "./src/store/authStore";

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    const {hasHydrated} = useAuthStore();

    if (!hasHydrated) {
        // show splash / loader while restoring storage
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <IndexStack/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
