import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import SideMenu from "react-native-side-menu";
import { globalData, commonIcons } from "@config/config";
import Menu from "./Menu";
import ListNoteFilterScreen from "./ListNoteFilterScreen";
import ListNoteHeartedScreen from "./ListNoteHeartedScreen";
import ListNoteFavScreen from "./ListNoteFavScreen";
import ListNotePoem from "./ListNotePoem";
import ListNoteStory from "./ListNoteStory";
import styles from "./styles";
const list_icon = commonIcons.list_menuIcon;

let header_Title;
//#2AEBB4 green color code here
export default class SideMenuMain extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: "Filter",
      defaultCheckedImg: commonIcons.defaultCheckedImg,
      checkedImg: commonIcons.checkedImg
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
      defaultCheckedImg: commonIcons.checkedImg
    });

  splitingHeaderView() {
    if (this.state.selectedItem === "Filter") {
      header_Title = this.state.selectedItem;
    } else if (this.state.selectedItem === "Hearted") {
      header_Title = this.state.selectedItem;
    } else if (this.state.selectedItem === "Favourite") {
      header_Title = this.state.selectedItem;
    } else if (this.state.selectedItem === "Poem") {
      header_Title = this.state.selectedItem;
    } else if (this.state.selectedItem === "Story") {
      header_Title = this.state.selectedItem;
    }

    return (
      <View style={styles.splitingHeaderView}>
        <View style={styles.leftside_Header_Menu}>
          {header_Title === "Filter" ? (
            <Text style={styles.title} numberOfLines={1}>
              {" "}
              Notely{" "}
            </Text>
          ) : (
            <Text style={styles.title} numberOfLines={1}>
              {" "}
              {header_Title}{" "}
            </Text>
          )}
        </View>
        <View style={styles.middle_Header_title} />
        <View style={styles.rightside_Header_Menu}>
          <TouchableOpacity onPress={this.toggle} style={styles.menu_button}>
            <Image source={list_icon} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  navBarRender_Header() {
    return <View style={styles.header}>{this.splitingHeaderView()}</View>;
  }

  subContainer() {
    return (
      <View style={styles.miniContainer}>
        {header_Title === "Filter" ? (
          <ListNoteFilterScreen navigator={this.props.navigator} />
        ) : header_Title === "Hearted" ? (
          <ListNoteHeartedScreen navigator={this.props.navigator} />
        ) : header_Title === "Favourite" ? (
          <ListNoteFavScreen navigator={this.props.navigator} />
        ) : header_Title === "Poem" ? (
          <ListNotePoem navigator={this.props.navigator} />
        ) : header_Title === "Story" ? (
          <ListNoteStory navigator={this.props.navigator} />
        ) : (
          <View />
        )}
      </View>
    );
  }

  render() {
    const menu = (
      <Menu
        onItemSelected={this.onMenuItemSelected}
        ischangeImgColor={this.state.defaultCheckedImg}
        selectedItem={this.state.selectedItem}
      />
    );

    return (
      <SideMenu
        menu={menu}
        disableGestures={true}
        openMenuOffset={180}
        isOpen={this.state.isOpen}
        menuPosition={"right"}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          {Platform.OS === "android" ? (
            <View />
          ) : (
            <StatusBar barStyle="light-content" backgroundColor="black" />
          )}
          {this.navBarRender_Header()}
          {this.subContainer()}
        </View>
      </SideMenu>
    );
  }
}
