import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class HomeScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerRight: (
                <Button onPress={() => alert('Hola!')}
                        title="Secret"
                        color= "white"
                />
            ),
            headerLeft: (
                <Button onPress={() => navigation.navigate('Modal')}
                        title="Secret 2"
                        color= "white"
                />
            )
        }
    };

    render() {
        return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: Math.random(),
                            otherParam: 'Hola wapo'
                        })
                    }} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});