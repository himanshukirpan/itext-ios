import {BlurView} from "@react-native-community/blur";
import {StyleSheet} from "react-native";

export  const blurHeaderOptions = {
    headerTransparent: true,
    headerTitleAlign: 'center',
    headerTitleStyle: {color: 'white', fontWeight: 'bold'},
    headerTintColor: 'white',
    headerBackground: () => (
        <BlurView
            blurType="light"
            blurAmount={20}
            style={StyleSheet.absoluteFill}
            reducedTransparencyFallbackColor="#111"
        />
    ),
};


export const styles = StyleSheet.create({
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
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
    },
});