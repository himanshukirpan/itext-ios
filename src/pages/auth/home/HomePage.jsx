import {useAuthStore} from "../../../store/authStore";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";

export default (() => {
    const {data, setLogin} = useAuthStore();
    return <View style={styles.screen}>
        <Text style={{ fontSize: 24}}>
            Home Page Data
        </Text>
        <Button
            mode="contained"
            onPress={() => {
                setLogin(!data.login);
                // data.setUser({ name: 'Bharat Kathore', email: 'bharat@example.com' });
            }}
        >
            Log Out
        </Button>
    </View>
})

const styles = StyleSheet.create({
    pillBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 9999, // pill shape
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
