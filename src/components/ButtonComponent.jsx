import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default (({
  label = "Button",
  color = "#dc2626",
  disabled = false,
  size = "medium",
  onPress = () => {},
    className
}) => {
  const sizeClasses = {
    small: "py-2 px-3 text-sm",
    medium: "py-3 px-4 text-base",
    large: "py-4 px-6 text-lg",
  };

  const selectedSize = sizeClasses[size] || sizeClasses.medium;

  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : null}
      disabled={disabled}
      className={`mx-4 rounded ${
        disabled ? "bg-gray-400" : ""
      } ${className}`}
      style={{ backgroundColor: disabled ? "#9ca3af" : color }}
    >
      <Text
        className={`text-white font-semibold text-center text-lg ${selectedSize}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
});
