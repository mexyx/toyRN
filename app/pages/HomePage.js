import React from 'react'
import { Button } from 'react-native'

export default class HomePage extends React.Component {
    render () {
        return <Button title="go back" onPress={() => this.props.navigation.navigate('Main')} />
    }
}