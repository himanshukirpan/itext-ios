import React, {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useFormik} from "formik";
import * as Yup from "yup";
import CountryPicker from "react-native-country-picker-modal";
import {useAuthStore} from "../../store/authStore";

// ✅ Validation schema
const LoginSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid phone number")
        .required("Phone number is required"),

  isOtp: Yup.boolean(),
  otp: Yup.string().when("isOtp", {
    is: true, // if isOtp is true
    then: (schema) =>
      schema
        .matches(/^[0-9]{6}$/, "Enter valid 6-digit OTP")
        .required("OTP is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  countryCode: Yup.string().required(),
  callingCode: Yup.string().required(),
});

export default function LoginScreen() {

    const {setUser,setLogin} = useAuthStore();
    const [otpTimer, setOtpTimer] = useState(300); // 5 mins countdown
    // ⏳ OTP Timer countdown
    useEffect(() => {
        if (otpTimer > 0) {
            const interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [otpTimer]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    // ✅ Formik setup
    const formik = useFormik({
        initialValues: {
            phone: "",
            otp: "",
            countryCode: 'IN',
            callingCode: '91',
            isOtp: false,
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {

            if(values.isOtp){
                setLogin(true)
            }else{
                formik.setFieldValue("isOtp", true);
            }
            console.log("Form Submitted:", values);
        },
    });

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{flexGrow: 1}} className="px-6 py-8">
                <Text className="text-xl font-bold mb-4">Set Up</Text>

                <View className="grid gap-4">
                    {/* Country Picker */}
                    <View>
                        <Text className="text-base font-semibold">Country</Text>
                        <View className="border border-gray-300 rounded-lg mt-2 p-3 flex-row items-center">
                            <CountryPicker
                                withCallingCode
                                withFilter
                                countryCode={formik.values.countryCode}
                                withFlag
                                onSelect={(country) => {
                                    formik.setFieldValue("countryCode", country.cca2);
                                    formik.setFieldValue("callingCode", country.callingCode[0]);
                                }}
                            />
                            <Text
                                className="ml-2 text-gray-700">{formik.values.countryCode} +{formik.values.callingCode}</Text>
                        </View>
                    </View>

                    {/* Phone Number */}
                    <View>
                        <Text className="text-base font-semibold">Mobile Number</Text>
                        <View className="flex-row items-center border border-gray-300 rounded-lg mt-2">
                            <Text className="px-3 py-5 text-red-600">(+{formik.values.callingCode})</Text>
                            <TextInput
                                className="flex-1 px-3 py-3 text-red-600"
                                keyboardType="number-pad"
                                placeholder="Enter number"
                                value={formik.values.phone}
                                onChangeText={formik.handleChange("phone")}
                                onBlur={formik.handleBlur("phone")}
                            />
                        </View>
                        {formik.touched.phone && formik.errors.phone && (
                            <Text className="text-red-500 text-sm mt-1">{formik.errors.phone}</Text>
                        )}
                    </View>


                    {/* Timer */}
                    {
                        formik.values.isOtp &&
                        <>
                            {/* OTP */}
                            <View>
                                <TextInput
                                    className="border-b border-black px-3 py-4 text-red-600 text-lg"
                                    placeholder="Enter OTP"
                                    keyboardType="number-pad"
                                    maxLength={6}
                                    value={formik.values.otp}
                                    onChangeText={formik.handleChange("otp")}
                                    onBlur={formik.handleBlur("otp")}
                                />
                                {formik.touched.otp && formik.errors.otp && (
                                    <Text className="text-red-500 text-sm mt-1">{formik.errors.otp}</Text>
                                )}
                            </View>
                            <View className="bg-gray-200 p-3 rounded-lg items-center">
                                <Text className="text-gray-600">
                                    OTP WILL EXPIRE IN: {formatTime(otpTimer)}
                                </Text>
                            </View>
                        </>
                    }


                    {/* Register Button */}
                    <TouchableOpacity
                                onPress={formik.handleSubmit}
                                className="bg-red-600 rounded-lg py-4 items-center"
                            >
                                <Text className="text-white text-lg font-bold">
                                    { formik.values.isOtp?'REGISTER':'SEND OTP'
                                     }
                                    </Text>
                            </TouchableOpacity>


                    {/* Terms */}
                    <Text className="text-center text-sm text-gray-600 mt-2">
                        By registering you agree to iNumber{" "}
                        <Text className="text-red-600">Terms & Conditions of use</Text> &{" "}
                        <Text className="text-red-600">Privacy Policy</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
