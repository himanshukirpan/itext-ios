import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useFormik } from "formik";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default (() => {
  const formik = useFormik({
    initialValues: {
      country: "+44",
      virtualNumber: "447701424003",
      expiryDate: "2024-02-14",
      validity: "monthly",
      primaryNumber: false,
      virtualName: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <ScrollView className="flex-1 bg-white">

      {/* Country */}
      <View className="px-4 mt-4">
        <Text className="text-gray-600 mb-1">Country</Text>
        <TextInput
          value={formik.values.country}
          onChangeText={formik.handleChange("country")}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
          editable={false}
        />
      </View>

      {/* Virtual Number */}
      <View className="px-4 mt-4">
        <Text className="text-gray-600 mb-1">Virtual number</Text>
        <TextInput
          value={formik.values.virtualNumber}
          onChangeText={formik.handleChange("virtualNumber")}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
          editable={false}
        />
      </View>

      {/* Expiry Date */}
      <View className="px-4 mt-4">
        <Text className="text-gray-600 mb-1">Expiry Date</Text>
        <TextInput
          value={formik.values.expiryDate}
          onChangeText={formik.handleChange("expiryDate")}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
          editable={false}
        />
      </View>

      {/* Validity */}
      <View className="px-4 mt-4">
        <Text className="text-gray-600 mb-1">Validity</Text>
        <TextInput
          value={formik.values.validity}
          onChangeText={formik.handleChange("validity")}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
          editable={false}
        />
      </View>

      {/* Primary Number Checkbox */}
      <View className="flex-row items-center px-4 mt-4">
  <Text className="flex-1 text-gray-600">Select Primary Number</Text>
  <TouchableOpacity
    onPress={() =>
      formik.setFieldValue("primaryNumber", !formik.values.primaryNumber)
    }
    className={`w-6 h-6 border rounded items-center justify-center ${
      formik.values.primaryNumber ? "bg-blue-600 border-blue-600" : "border-gray-400"
    }`}
  >
    {formik.values.primaryNumber && (
      <MaterialIcons name="check" size={16} color="#fff" />
    )}
  </TouchableOpacity>
</View>
      {/* Virtual Number Name */}
      <View className="px-4 mt-4">
        <Text className="text-gray-600 mb-1">Virtual no name</Text>
        <TextInput
          value={formik.values.virtualName}
          onChangeText={formik.handleChange("virtualName")}
          placeholder="Enter virtual number name"
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
        />
      </View>

      {/* Change Button */}
      <View className="px-4 mt-4">
        <TouchableOpacity className="bg-gray-200 py-3 rounded-md">
          <Text className="text-center text-[#0B1D4A] font-semibold">
            CHANGE VIRTUAL NUMBER NAME
          </Text>
        </TouchableOpacity>
      </View>

      {/* Submit */}
      <View className="px-4 mt-8 mb-8">
        <TouchableOpacity
          onPress={formik.handleSubmit}
          className="bg-red-600 py-4 rounded-md"
        >
          <Text className="text-center text-white font-bold text-lg">SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});
