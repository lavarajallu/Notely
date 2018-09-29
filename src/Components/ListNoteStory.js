import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
export default class ListNoteStory extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.exampleText}>
					Welcome to React ListNote ListNoteStory Screen!
				</Text>
			</View>
		);
	}
}
