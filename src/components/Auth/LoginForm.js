import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput,Button,Keyboard, Alert } from 'react-native'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {user, userDetails} from "../../utils/userDB";
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {

 const showAlert = () => {
  Alert.alert('Error','El usuario o Contrasena son Incorrectos',[{text:"OK",style:"cancel"}],{cancelable:true})
 }
 
 const {login} = useAuth();
 console.log(useAuth());
 
  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    initialValues:initalValues(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      const {username, password} = formValue;
      if (username !== user.username || password !== user.password) {
        console.log("fallido");
        showAlert();
      } else {
        console.log("login exitoso");
        login(userDetails);
      }     
    }
  })
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput 
        placeholder="Nombre de Usuario" 
        style={styles.input} 
        autoCapitalize="none" 
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username',text) }
       />
      <TextInput 
        placeholder="Contraseña" 
        style={styles.input} 
        autoCapitalize="none" 
        secureTextEntry={true} 
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password',text) } 
      />
      <Button title="Entrar" onPress={() => formik.handleSubmit()}/>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

function initalValues() {
  return {
    username: "",
    password: ""
  }
}

function validationSchema(){
  return {
    username: Yup.string().required("El usuario es requerido"),
    password: Yup.string().required("La contrasena es obligatoria")
  }
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  error:{
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }
})