import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props{
    title: string;
    position: 'br' | 'bl';
    onPress: () => void;
}

export const FabButton = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {

        return (
            <TouchableOpacity onPress={ onPress } style={(position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR} activeOpacity={0.7}>
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {

        return (
            <View style={(position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR}>
                <TouchableNativeFeedback onPress={ onPress } background={TouchableNativeFeedback.Ripple('grey', false, 30)}>
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    // return (
    //     <View style={(position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR}>
    //         <TouchableNativeFeedback onPress={ onPress } background={TouchableNativeFeedback.Ripple('grey', false, 30)}>
    //             <View style={ styles.fab }>
    //                 <Text style={ styles.fabText }>
    //                     {title}
    //                 </Text>
    //             </View>
    //         </TouchableNativeFeedback>
    //     </View>
    // )

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
    },
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab:{
        backgroundColor: 'white',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 8,
    },
    fabText:{
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
   
})