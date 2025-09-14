import React from "react";
import {View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {useFormik} from "formik";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckboxComponent from "../../../components/CheckboxComponent";
import ButtonComponent from "../../../components/ButtonComponent";

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
                <CheckboxComponent
                    value={formik.values.primaryNumber}
                    onChange={() => formik.setFieldValue("primaryNumber", !formik.values.primaryNumber)}
                    color="#d32f2f"
                    size={28}
                />
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
            <ButtonComponent color={'rgba(136,136,136,0.48)'} onPress={formik.handleSubmit} className="mt-4" label="CHANGE VIRTUAL NUMBER NAME" size="medium" />
            {/* Submit */}
            <ButtonComponent  onPress={formik.handleSubmit} className="my-8" label="SUBMIT" size="large" />

        </ScrollView>
    );
});
