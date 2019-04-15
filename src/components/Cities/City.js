import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TextInput } from 'react-native';
import { colors } from '../../theme';
import NoMessage from '../NoMessage';
export default class City extends Component {
    static navigationOptions = (({ navigation }) => {
        const { city } = navigation.state.params.city;
        return {
            title: city,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '400'
            }
        }
    })
    state = {
        name: '',
        info: ''
    };
    onChaneText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    addLocation = () => {
        if (this.state.name === '' || this.state.info === '') return;
        const { city } = this.props.navigation.state.params;
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        console.log('Location : ', location);
        this.props.screenProps.addLocation(location, city)
        this.setState({
            name: '',
            info: ''
        });
    }

    render() {
        const { city } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1 }}>
                {city.locations.length === 0 ? <NoMessage message  ={"No locations found!"} /> : city.locations.map((location, index) => (
                    <View style={styles.locationContainer}>
                        <Text style={styles.locatioName}>{location.name}</Text>
                        <Text style={styles.locatioInfo}>{location.info}</Text>
                    </View>
                ))
                }
                <TextInput
                    placeholder="Location name"
                    value={this.state.name}
                    onChangeText={(val) => this.onChaneText('name', val)}
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Location info"
                    value={this.state.info}
                    onChangeText={(val) => this.onChaneText('info', val)}
                    placeholderTextColor='white'
                    style={[styles.input, styles.bottomStyle]}
                />
                <View style={styles.buttonContainer}>
                    <TouchableWithoutFeedback onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    locationContainer: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        padding: 10
    },
    locatioName: {
        fontSize: 20
    },
    locatioInfo: {
        color: 'rgba(0,0,0,.5)'
    },
    input: {
        position: 'absolute',
        color: 'white',
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        bottom: 104,
        left: 0
    },
    bottomStyle: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});