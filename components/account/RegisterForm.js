import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.form}>
            <Input
                placeholder="Ingresa tu Email..."
                containerStyle={styles.input}
            />
            <Input
                placeholder="Ingresa tu Contraseña..."
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Confirma tu Contraseña..."
                containerStyle={styles.input}
                password={true}
                secureTextEntry={true}
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
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form : {
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
