import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuidV4 from 'uuid/v4';
import { colors } from '../../theme';

export default class AddCity extends Component {
    state = {
        country: '',
        city: ''
    }
    onChangeText = (key, value) => {
        console.log(value);
        this.setState({
            [key]: value
        })
    }
    onSubmit = () => {
        if (this.state.city === '' || this.state.country === '') return;
        const city = {
            city: this.state.city,
            country: this.state.country,
            locations: [],
            id: uuidV4()
        }
        this.props.screenProps.addCity(city);
        this.setState({
            city: '',
            country: ''
        }, () => {
            this.props.navigation.navigate('Cities');
        })

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Cities App</Text>
                <TextInput
                    placeholder='City Name'
                    value={this.state.city}
                    onChangeText={val => this.onChangeText('city', val)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Country Name'
                    value={this.state.country}
                    onChangeText={val => this.onChangeText('country', val)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.onSubmit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 50
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#666'
    },
    buttonText: {
        color: 'white'
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.primary
    }
});