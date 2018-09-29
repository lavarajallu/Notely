import React, { Component } from "react";
import {
	Platform,
	Alert,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	AsyncStorage,
	FlatList
} from "react-native";
import styles from "./styles";
import { globalData, commonIcons } from "@config/config";
import Swipeout from "react-native-swipeout";
import { Actions, Scene } from "react-native-router-flux";
import ListNoteDetailsScreen from "./ListNoteDetailsScreen";

export default class ListNoteFavScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			select_Fav: commonIcons.selectheartImg,
			unselect_Fav: commonIcons.unselectheartImg,
			unstarred_Icon: commonIcons.unselectstarImg,
			faviorite_list: globalData.dataArray,
			starred_list: []
		};
	}

	componentDidMount() {
		//alert("hi");
		this.getFavlist();
	}

	getFavlist() {
		AsyncStorage.getItem("favorite", (err, favorite_list) => {
			// based on store fav list
			if (favorite_list) {
				var favorite_list = JSON.parse(favorite_list);
				this.setState(
					{
						data: favorite_list
					},
					() => {}
				);
			}
		});

		//this.setState({ data: globalData.dataArray });
	}

	deleteNote(getData) {
		// to show the user waqnt to delete or not confirm method
		let { item, index } = getData;
		Alert.alert(
			"Notely",
			"Are you sure you want to delte this Note?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{ text: "Yes", onPress: () => this.deleteMethod(item) }
			],
			{ cancelable: false }
		);
	}

	deleteMethod(getData) {
		// this is to remove particlar note
		let { item, index } = getData;
		this.state.data.splice(index, 1);
		this.setState({ data: globalData.dataArray });
	}

	_keyExtractor(item, index) {
		return index;
	}

	viewDetails_method(item) {
		Actions.ListNoteDetailsScreen({ viewDetails: item });
		// console.log("hi viewDetails: ", item.titleVal)
	}

	renderItem(data) {
		// this is list of items getting UI list inside flatList
		let {
			starred_Icon,
			unstarred_Icon,
			select_Fav,
			unselect_Fav,
			starred_list,
			faviorite_list
		} = this.state;
		let { item, index } = data;
		let swipeBtns = [
			{
				component: (
					<View style={styles.deleteIconView}>
						<Image
							source={commonIcons.deleteImg}
							style={styles.deleteIcon}
						/>
					</View>
				),
				backgroundColor: "red",
				onPress: () => {
					this.deleteNote(data);
				}
			}
		];
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.rowmainView}>
					<Swipeout
						right={swipeBtns}
						autoClose={true}
						backgroundColor="#FFF"
					>
						<View style={styles.rowmainView}>
							<View style={styles.splitView}>
								<View style={styles.rowsubview}>
									<TouchableOpacity
										style={styles.rowtitleView}
										onPress={this.viewDetails_method.bind(
											this,
											item
										)}
									>
										<Text style={styles.list_title}>
											{item.titleVal}
										</Text>
										<Text
											style={styles.subtitle}
											numberOfLines={1}
										>
											{item.subtitleVal}
										</Text>
										<Text style={styles.dateTextLabel}>
											{item.datetextVal}
										</Text>
									</TouchableOpacity>
									<View style={styles.iconsMainView}>
										<View style={styles.iconssubView}>
											<TouchableOpacity
												style={styles.iconView}
											>
												<Image
													source={
														this.state
															.unstarred_Icon
													}
													style={styles.iconprop}
												/>
											</TouchableOpacity>
											<TouchableOpacity
												style={styles.iconView}
											>
												<Image
													source={
														this.state.select_Fav
													}
													style={styles.iconprop}
												/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</Swipeout>
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					extraData={this.state}
					data={this.state.data}
					keyExtractor={(item, index) => String(index)}
					renderItem={this.renderItem.bind(this)}
				/>
			</View>
		);
	}
}
