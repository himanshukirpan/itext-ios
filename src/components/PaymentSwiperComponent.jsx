import React, { useState } from "react";
import { View, Text } from "react-native";
import SwipeButton from "rn-swipe-button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import  {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default (({amount=''}) => {
  const progress = useSharedValue(0); // swipe progress (0 → 1)

  return (
    <View className="absolute bottom-6 left-4 right-4">
      <SwipeButton
        title={` Swipe to Pay £${amount || "0.00"}`} // remove default label
        disabled={amount === ""}
        swipeSuccessThreshold={70}
        height={60}
        railBackgroundColor="red" // light grey background
        railBorderColor="red" // no border
        railFillBackgroundColor="red" // so Animated.View is visible
          railFillBorderColor={'#fff'}
        thumbIconBackgroundColor="red"
        thumbIconBorderColor={"#fff"}
        thumbIconComponent={() => (
          <MaterialIcons name="arrow-forward" size={28} color="#fff" />
        )}
        titleColor={'#fff'}
        // update progress continuously
        onSwipeMove={(percentage) => {
          progress.value = withTiming(percentage / 100, { duration: 50 });
        }}
        onSwipeSuccess={() => {
          alert(`Proceeding payment of £${amount}`);
        }}
      />
    </View>
  );
});
