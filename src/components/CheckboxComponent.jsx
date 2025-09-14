import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default ({ value = false, onChange, color = "#d32f2f", size = 24 }) => {
  return (
    <TouchableOpacity onPress={() => onChange && onChange(!value)}>
      {value ? (
        <MaterialIcons name="check-box" size={size} color={color} />
      ) : (
        <MaterialIcons
          name="check-box-outline-blank"
          size={size}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};
