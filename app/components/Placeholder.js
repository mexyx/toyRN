import React from 'react'
import {
    Text,
    View,
} from 'react-native'

export default (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 40
            }}>{props.content}</Text>
        </View>
    )
}