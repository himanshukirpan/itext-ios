import React, {useState} from "react";
import {View, Text} from "react-native";
import SwipeButton from "rn-swipe-button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    useSharedValue, withTiming,
} from "react-native-reanimated";

export default (({amount = ''}) => {
    const progress = useSharedValue(0); // swipe progress (0 → 1)
    const [status, setStatus] = useState("idle"); // idle | processing | done

    return (<View className="absolute bottom-6 left-4 right-4">
            <SwipeButton
                title={status === "idle" ? `Swipe to Pay £${amount || "0.00"}` : status === "processing" ? "Processing..." : "Done ✅"}
                disabled={amount === ""}
                swipeSuccessThreshold={70}
                height={60}
                disabledRailBackgroundColor={"#9999"}
                disabledThumbIconBorderColor={"#fff"}
                railBackgroundColor="red"
                railBorderColor="#9999"
                // railFillBackgroundColor="red"
                railFillBorderColor={"#fff"}
                thumbIconBackgroundColor="red"
                thumbIconBorderColor={"#fff"}
                thumbIconComponent={() => (<MaterialIcons name="arrow-forward" size={28} color="#fff"/>)}
                titleColor={"#fff"}

                onSwipeSuccess={() => {
                    setStatus("processing");
                    setTimeout(() => {
                        setStatus("done");
                        alert(`Payment of £${amount} done ✅`);
                    }, 2000); // simulate API call delay
                }}
            />
        </View>);
});
