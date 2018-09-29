import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import ListScreen from "./ListScreen";

export default class ListNoteFilterScreen extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<ListScreen />
			</View>
		);
	}
}
