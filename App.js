/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

//These are imported Third party modules...

import SplashScreen from "react-native-splash-screen";
import { Router, Scene } from "react-native-router-flux";

//getting written Components  from Src folder....

import ListScreen from "@src/Components/ListScreen";
import ListNoteDetailsScreen from "@src/Components/ListNoteDetailsScreen";
import SideMenuMain from "@src/Components/SideMenuMain";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // life cycle method
    setTimeout(() => {
      this.splash_Hide();
    }, 6000);
  }

  splash_Hide() {
    // to hide the splash screen after 6 secs
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Router>
          <Scene key="root">
            <Scene key="ListScreen" component={ListScreen} hideNavBar={true} />
            <Scene
              key="ListNoteDetailsScreen"
              component={ListNoteDetailsScreen}
              hideNavBar={true}
            />
            <Scene
              key="SideMenuMain"
              component={SideMenuMain}
              initial={true}
              hideNavBar={true}
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
