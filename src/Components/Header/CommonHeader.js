import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./HeaderStyles";
import {globalData, commonIcons} from "@config/config";
import { Actions } from "react-native-router-flux";
export default class CommonHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: this.props.title,
			isclickEdit:false
		};
		this.back = this.back.bind(this);
		this.editMethod = this.editMethod.bind(this);
	}


	back() {
		Actions.pop({refresh: {refresh:Math.random()}});
	}

	editMethod(){
		//alert("edit_method:")
		this.setState({isclickEdit:true})

	}
	saveMethod(){
		//alert("save:")
		this.setState({isclickEdit:false})
		Actions.SideMenuMain()


	}

   undoMethod(){
		//alert("undoMethod:")
		this.setState({isclickEdit:false})

	}




	render() {
		let {isclickEdit} = this.state;
		return (
			<View style={styles.commonHeaderView}>
				<View style={styles.headerRowView}>
					<TouchableOpacity
						style={styles.headerIconsView}
						onPress={() => {
							this.back();
						}}
					>
						<Image
							source={commonIcons.backArrow_Icon}
							style={styles.backArrowIcon}
						/>
					</TouchableOpacity>
					 <View style={styles.headerTitleView}>
					  </View>
					
						
							{isclickEdit == false ? (
							<TouchableOpacity
								style={styles.headerIconsView}
							>
								
							</TouchableOpacity>
							):(
							<TouchableOpacity
								style={styles.headerIconsView}
								onPress={() => {
									this.undoMethod()
								}}
							>
								<Text style= {styles.editLabel}>Undo</Text>
							</TouchableOpacity>
						
							)}

							{isclickEdit == false ? (
							<TouchableOpacity
							style={styles.headerIconsView}
							onPress={() => {
								this.editMethod()
							}}
						>
							<Text style= {styles.editLabel}>EDIT</Text>
						</TouchableOpacity>
							):(
						<TouchableOpacity
							style={styles.headerIconsView}
							onPress={() => {
								this.saveMethod()
							}}
						>
							<Text style= {styles.editLabel}>Save</Text>
						</TouchableOpacity>
						
							)}
				</View>
			</View>
		);
	}
}
