import React from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigation} from "@react-navigation/native";


// ✅ Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
    const navigation = useNavigation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("✅ Login Success:", values);
    },
  });

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Register</Text>

        {/* Email */}
        <TextInput
          label="Email"
          mode="outlined"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          left={<TextInput.Icon icon="email" />}
          style={styles.input}
         textColor="#fff"
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}

        {/* Password */}
        <TextInput
          label="Password"
          mode="outlined"
          value={formik.values.password}
          secureTextEntry
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
         textColor="#fff"
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        {/* Login Button */}
        <Button
          mode="contained"
          style={styles.button}
          onPress={formik.handleSubmit}
        >
          Register
        </Button>
         <Pressable onPress={() => navigation.navigate("login")}>
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.link}>Login</Text>
        </Text>
         </Pressable>
      </Card>
    </View>
  );
}


// 🔹 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  card: {
    width: "90%",
    padding: 20,
    borderRadius: 20,
    elevation: 6,
    backgroundColor: "#1c1c1c",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "#222",
  },
  button: {
    borderRadius: 12,
    marginTop: 10,
    paddingVertical: 4,
  },
  error: {
    fontSize: 12,
    color: "#ff6b6b",
    marginBottom: 10,
  },
  registerText: {
    textAlign: "center",
    marginTop: 16,
    color: "#bbb",
  },
  link: {
    color: "#0af",
    fontWeight: "bold",
  },
});
