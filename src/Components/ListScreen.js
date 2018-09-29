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
import { Actions, Scene } from "react-native-router-flux";
import { globalData, commonIcons } from "@config/config";
import styles from "./styles";
import ListNoteDetailsScreen from "./ListNoteDetailsScreen";
import Swipeout from "react-native-swipeout";
var initalfaviorite_list = [];
var initalstarred_list = [];

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select_Fav: commonIcons.selectheartImg,
      unselect_Fav: commonIcons.unselectheartImg,
      starred_Icon: commonIcons.selectstarImg,
      unstarred_Icon: commonIcons.unselectstarImg,
      faviorite_list: [],
      starred_list: []
    };
  }

  viewDetails_method(item) {
    Actions.ListNoteDetailsScreen({ viewDetails: item });
    // console.log("hi viewDetails: ", item.titleVal)
  }

  componentDidMount() {
    this.intialShowlistOfNotes();
  }

  intialShowlistOfNotes() {
    this.setState({ data: globalData.dataArray });
  }

  favorite_method(item) {
    let list_Obj = {
      id: item.id,
      titleVal: item.titleVal,
      subtitleVal: item.subtitleVal,
      datetextVal: item.datetextVal,
      paragraphStory: item.paragraphStory
    };

    var count = 0;
    if (initalfaviorite_list.length == 0) {
      if (
        this.state.faviorite_list == undefined ||
        this.state.faviorite_list.length == 0
      ) {
        initalfaviorite_list.push(list_Obj);
        this.setState({ faviorite_list: initalfaviorite_list }, () => {
          //console.log('intial: '+ JSON.stringify(this.state.faviorite_list))
          //alert("fa: " + JSON.stringify(this.state.faviorite_list));
          var data = JSON.stringify(this.state.faviorite_list);
          AsyncStorage.setItem("favorite", data); // here we dont't have api's so that's why i amsvaing the data locally
        });
      } else {
        //console.log('intial else: '+ JSON.stringify(this.state.faviorite_list))
      }
    } else {
      this.state.faviorite_list.map((res, i) => {
        if (res.id == item.id) {
          count++;
          initalfaviorite_list.splice(i, 1); //--> this is used for removing
          //console.log('faviorite_list: '+ JSON.stringify(this.state.faviorite_list))
          this.setState({ faviorite_list: initalfaviorite_list }, () => {
            //console.log('intial: '+ JSON.stringify(this.state.faviorite_list))
            var data = JSON.stringify(this.state.faviorite_list);
            AsyncStorage.setItem("favorite", data);
          });
        }
      });
      if (count === 0) {
        initalfaviorite_list.push(list_Obj);
        this.setState({ faviorite_list: initalfaviorite_list }, () => {
          // console.log('countZero:-- '+JSON.stringify(this.state.faviorite_list))
          var data = JSON.stringify(this.state.faviorite_list);
          AsyncStorage.setItem("favorite", data);
        });
      }
    }
  }

  starred_method(item) {
    let list_Obj = {
      id: item.id,
      titleVal: item.titleVal,
      subtitleVal: item.subtitleVal,
      datetextVal: item.datetextVal,
      paragraphStory: item.paragraphStory
    };

    var countval = 0;
    if (initalstarred_list.length == 0) {
      if (
        this.state.starred_list == undefined ||
        this.state.starred_list.length == []
      ) {
        initalstarred_list.push(list_Obj);
        this.setState({ starred_list: initalstarred_list }, () => {
          //alert('intial: '+ JSON.stringify(this.state.starred_list))
          var data = JSON.stringify(this.state.starred_list);
          AsyncStorage.setItem("starred", data);
        });
      }
    } else {
      this.state.starred_list.map((res, i) => {
        if (res.id == item.id) {
          countval++;
          this.state.starred_list.splice(i, 1); //--> this is used for removing
          //alert('starred_list: '+ JSON.stringify(this.state.starred_list))
          this.setState({ starred_list: initalstarred_list }, () => {
            var data = JSON.stringify(this.state.starred_list);
            AsyncStorage.setItem("starred", data);
          });
        }
      });
      if (countval === 0) {
        initalstarred_list.push(list_Obj);
        this.setState({ starred_list: initalstarred_list }, () => {
          //alert('countZero:-- '+JSON.stringify(this.state.starred_list))
          var data = JSON.stringify(this.state.starred_list);
          AsyncStorage.setItem("starred", data);
        });
      }
    }
  }

  _keyExtractor(item, index) {
    return index;
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
    var isFavourite = faviorite_list.find(ite => ite.id === item.id);
    var isStarred = starred_list.find(starred => starred.id === item.id);
    let swipeBtns = [
      {
        component: (
          <View style={styles.deleteIconView}>
            <Image source={commonIcons.deleteImg} style={styles.deleteIcon} />
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
          <Swipeout right={swipeBtns} autoClose={true} backgroundColor="#FFF">
            <View style={styles.rowmainView}>
              <View style={styles.splitView}>
                <View style={styles.rowsubview}>
                  <TouchableOpacity
                    style={styles.rowtitleView}
                    onPress={this.viewDetails_method.bind(this, item)}
                  >
                    <Text style={styles.list_title}>{item.titleVal}</Text>
                    <Text style={styles.subtitle} numberOfLines={1}>
                      {item.subtitleVal}
                    </Text>
                    <Text style={styles.dateTextLabel}>{item.datetextVal}</Text>
                  </TouchableOpacity>
                  <View style={styles.iconsMainView}>
                    <View style={styles.iconssubView}>
                      <TouchableOpacity
                        style={styles.iconView}
                        onPress={this.starred_method.bind(this, item)}
                      >
                        <Image
                          source={isStarred ? starred_Icon : unstarred_Icon}
                          style={styles.iconprop}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.iconView}
                        onPress={this.favorite_method.bind(this, item)}
                      >
                        <Image
                          source={isFavourite ? select_Fav : unselect_Fav}
                          style={styles.iconprop}
                        />
                        <Text>{!item.isFavourite}</Text>
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
