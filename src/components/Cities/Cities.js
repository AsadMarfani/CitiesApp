import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../theme';


export default class Cities extends Component {
    static navigationOptions = {
        title: 'Cities',
        headerTitleStyle: {
            fontSize: 20,
            color: 'white',
            fontWeight: '400'
        }
    }
    viewCity = (city) => {
        this.props.navigation.navigate('City', { city });
    }
    render() {
        const { cities } = this.props.screenProps;
        return (
            <ScrollView>
                <View>
                    {
                        cities.map((city, index) => (
                            <View key={city.id}>
                                <TouchableWithoutFeedback onPress={() => this.viewCity(city)}>
                                    <View style={styles.cityContainer}>
                                        <Text style={styles.cityName}>{city.city}</Text>
                                        <Text style={styles.countryName}>{city.country}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    cityName: {
        fontSize: 20
    },
    countryName: {
        color: 'rgba(0,0,0,.5)'
    }
})