import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody} 
        >
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>¿Cómo describrías mejor tu restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cuál te ha gustado más y comenta tu experiencia.</Text>
            <Button
                title="Ver tu Perfil"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody : {
        marginHorizontal: 30
    },
    image : {
        height: 300,
        width: "100%",
        marginBottom: 10
    },
    title : {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description : {
        marginBottom: 20,
        textAlign: "justify",
        color: "#a65273"
    },
    button : {
        backgroundColor: "#442484"
    }
})
