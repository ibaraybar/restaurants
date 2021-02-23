import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import Loading from '../Loading'
import { validateEmail } from '../../utils/helpers'
import { loginWithEmailAndPassword } from '../../utils/actions'
import { isEmpty } from 'lodash'

export default function LoginForm() {
   const [showPassword, setShowPassword] = useState(false)
   const [formData, setFormData] = useState(defaultFormValues())
   const [errorEmail, setErrorEmail] = useState("")
   const [errorPassword, setErrorPassword] = useState("")
   const [loading, setLoading] = useState(false)

   const navigation = useNavigation()

   const onChange = (e, type) => {
      setFormData({...formData, [type]: e.nativeEvent.text})
   }

   const validateData = () => {
      setErrorEmail("")
      setErrorPassword("")
      let isValid=true

      if(!validateEmail(formData.email)) {
          setErrorEmail("Debes ingresar un Email válido.")
          isValid=false
      }

      if (isEmpty(formData.password)) {
         setErrorPassword("Debes ingresar tu contraseña.")
         isValid=false
      }

      return isValid
   }

   const doLogin = async() => {
      if (!validateData()) {
         return
      }

      setLoading(true)
      const result = await loginWithEmailAndPassword(formData.email, formData.password)
      setLoading(false)

        if(!result.statusResponse) {
            setErrorEmail(result.error)
            setErrorPassword(result.error)
            return
        }

        navigation.navigate("account")
   }

   return (
      <View style={styles.container}>
         <Input
            placeholder="Ingresa tu Email..."
            containerStyle={styles.input}
            keyboardType="email-address"
            onChange={(e) => onChange(e, "email")}
            errorMessage={errorEmail}
            defaultValue={formData.email}
         />
         <Input
            placeholder="Ingresa tu Contraseña..."
            containerStyle={styles.input}
            password={true}
            secureTextEntry={!showPassword}
            onChange={(e) => onChange(e, "password")}
            errorMessage={errorPassword}
            defaultValue={formData.password}
            rightIcon={
               <Icon
                  type="material-community"
                  name={ showPassword ? "eye-off-outline" : "eye-outline"}
                  iconStyle={styles.icon}
                  onPress={() => setShowPassword(!showPassword)}
               />
                }
         />
         <Button
            title="Iniciar Sesión"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={() => doLogin()}
         />
         <Loading isVisible={loading} text="Iniciando Sesión..."/>
      </View>
   )
}

const defaultFormValues = () => {
   return {email: "", password: ""}
}

const styles = StyleSheet.create({
   container : {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30
   },
   input : {
      width: "100%"
   },
   btnContainer : {
      marginTop: 20,
      width: "95%",
      alignSelf: "center"
   },
   btn : {
      backgroundColor: "#442482"
   },
   icon : {
      color: "#c1c1c1"
   }
})
