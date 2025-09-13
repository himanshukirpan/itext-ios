import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required("Phone number is required"),
  countryCode: Yup.string().required("Country code required"),
  callingCode: Yup.string().required("Calling code required"),
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

export default () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      otp: "",
      countryCode: "IN",
      callingCode: "91",
      name: "",
      number: "",
      isOtp: false,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <View className="flex-1 bg-white relative">


      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Country Picker */}
        <View className="px-4 mt-5">
          <Text className="text-base font-semibold">Select country code to buy number</Text>
          <View className="border border-gray-300 rounded-lg mt-2 p-3 flex-row items-center">
            <CountryPicker
              withCallingCode
              withFilter
              withFlag
              countryCode={formik.values.countryCode}
              onSelect={(country) => {
                formik.setFieldValue("countryCode", country.cca2);
                formik.setFieldValue("callingCode", country.callingCode[0]);
              }}
            />
            <Text className="ml-2 text-gray-700">
              {formik.values.countryCode} +{formik.values.callingCode}
            </Text>
          </View>
        </View>

        {/* Details Section */}
        <View className="bg-gray-100 py-2 px-4 mt-6">
          <Text className="font-semibold text-gray-800">Details</Text>
        </View>

        {/* Inputs */}
        <View className="px-4 mt-4">
          <TextInput
            placeholder="Set the name for this number (Eg : Office)"
            className="border-b border-gray-300 py-2 text-gray-800"
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <Text className="text-red-500 text-xs">{formik.errors.name}</Text>
          )}

          <TextInput
            placeholder="Area/Mobile number"
            className="border-b border-gray-300 py-2 text-gray-800 mt-4"
            value={formik.values.number}
            onChangeText={formik.handleChange("number")}
            keyboardType="phone-pad"
          />
          {formik.touched.number && formik.errors.number && (
            <Text className="text-red-500 text-xs">{formik.errors.number}</Text>
          )}
        </View>

        {/* Number Row */}
        <View className="flex-row justify-between items-center border-b border-gray-300 px-4 py-3 mt-2">
          <Text className="text-gray-700">Number</Text>
          <TouchableOpacity onPress={formik.handleSubmit}>
            <Text className="text-indigo-600 font-medium">
              +{formik.values.callingCode}
              {formik.values.number} &gt;
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer Note */}
        <Text className="text-xs text-gray-500 px-4 mt-6">
          Note: Fees will be deducted from your Balance for your purchase or
          charged to your chosen payment method
        </Text>
      </ScrollView>
    </View>
  );
};
