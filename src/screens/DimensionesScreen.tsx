import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// const { width, height } = Dimensions.get('window')

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={ style.container }>
                <View style={ {
                    ...style.cajaMorada,
                    width: width * 0.5} }/>
                <View style={ style.cajaNaranja }/>
            </View>
            <Text style={ style.title }> W: {width}, H: {height}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'grey'
    },
    cajaMorada: {
        backgroundColor: 'purple',
        // width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})
