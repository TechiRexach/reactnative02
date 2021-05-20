import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { FabButton } from '../components/FabButton'

export const CounterScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <FabButton title='+1' onPress={ () => setContador(contador + 1) } position='br'/>
            <FabButton title='-1' onPress={ () => setContador(contador - 1) } position='bl'/>
           
            {/* <TouchableOpacity onPress={ () => setContador(contador - 1) } style={styles.fabLocationBL}>
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
    }
})
