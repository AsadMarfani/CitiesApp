
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Tabs from './src';

const key = 'cities';
export default class App extends Component {
  state = {
    cities: [],
  }
  async componentDidMount() {
    try {
      const cities = await AsyncStorage.getItem(key);
      console.log('Cities : ', cities);
      if (cities !== null) {
        this.setState({
          cities: JSON.parse(cities)
        })
      }
    } catch (err) {
      console.log('ERROR IN APP ', err);
    }
  }
  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log('Data Inserted successfully.'))
      .catch((err) => console.log('Error occurred : ', err));
    this.setState({
      cities
    })
  }
  addLocation = (location, city) => {
    const cities = [...this.state.cities];
    const cityToUpdate = cities.find(storedCity => storedCity.id === city.id);
    console.log('City to update : ', cityToUpdate);
    cityToUpdate.locations.push(location);
    this.setState({
      cities
    }, () => {
      AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log('Data Inserted successfully.'))
      .catch((err) => console.log('Error occurred : ', err));
    });
  }
  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
        }}
      />
    );
  }
}