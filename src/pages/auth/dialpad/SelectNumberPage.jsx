import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import {useFormik} from "formik";
import * as Yup from "yup";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckboxComponent from "../../../components/CheckboxComponent";
import ButtonComponent from "../../../components/ButtonComponent";

const LoginSchema = Yup.object().shape({
    countryCode: Yup.string().required("Country code required"),
    callingCode: Yup.string().required("Calling code required"),
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
});

export default () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {id: 1, package: "1 Months", amount: 0},
        {id: 2, package: "3 Months", amount: 0},
        {id: 3, package: "6 Months", amount: 0},
        {id: 4, package: "12 Months", amount: 0},
        {id: 5, package: "24 Months", amount: 0},
        {id: 6, package: "36 Months", amount: 0},
    ];

    const formik = useFormik({
        initialValues: {
            countryCode: "IN",
            callingCode: "91",
            name: "",
            number: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log("Form Submitted:", {...values, plan: selectedPlan});
        },
    });

    return (
        <View className="flex-1 bg-white relative">
            <ScrollView contentContainerStyle={{paddingBottom: 20}}>
                {/* Country Picker */}
                <View className="px-4 mt-5">
                    <Text className="text-base font-semibold">
                        Select country code to buy number
                    </Text>
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

                {/* Options Header */}
                <View className="bg-gray-100 py-2 px-4 mt-6">
                    <Text className="font-semibold text-gray-800">Options</Text>
                </View>

                {/* Options Table */}
                <View className="px-4 mt-2">
                    <View className="flex-row justify-between border-b pb-2 mb-2">
                        <Text className="w-16 font-semibold text-red-600">Plan ID</Text>
                        <Text className="flex-1 font-semibold text-red-600">Package</Text>
                        <Text className="w-16 font-semibold text-red-600">Amount</Text>
                        <Text className="w-16 font-semibold text-red-600">Select</Text>
                    </View>

                    {plans.map((plan) => (
                        <View
                            key={plan.id}
                            className="flex-row justify-between items-center border-b py-2"
                        >
                            <Text className="w-16 text-gray-800">{plan.id}</Text>
                            <Text className="flex-1 text-gray-800">{plan.package}</Text>
                            <Text className="w-16 text-gray-800">{plan.amount}</Text>
                            <View className='w-16'>
                                <CheckboxComponent
                                    value={selectedPlan === plan.id}
                                    onChange={() => setSelectedPlan(plan.id)}
                                    color="#d32f2f"
                                    size={28}
                                />
                            </View>
                        </View>
                    ))}
                </View>

                {/* Purchase Button */}
                <ButtonComponent onPress={formik.handleSubmit} className="mt-6" label="PURCHASE" size="medium"/>
                {/* Footer Note */}
                <Text className="text-xs text-gray-500 px-4 mt-4 text-center">
                    Note: Fees will be deducted from your Balance for your purchase or
                    charged to your chosen payment method
                </Text>
            </ScrollView>
        </View>
    );
};
