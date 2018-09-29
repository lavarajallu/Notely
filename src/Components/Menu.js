import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import styles from "./styles";
import { globalData, commonIcons } from "@config/config";

export default function Menu({
  onItemSelected,
  ischangeImgColor,
  selectedItem
}) {
  return (
    <View style={styles.menuContainerView}>
      <TouchableOpacity
        style={styles.menuFlexView}
        onPress={() => onItemSelected("Filter")}
      >
        <View style={[styles.menuFlexView, { flex: 1 }]}>
          <Text style={styles.item}>FILTER</Text>
          <Image source={commonIcons.cancelImg} style={styles.cancelIcon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuFlexView}
        onPress={() => onItemSelected("Hearted")}
      >
        {selectedItem === "Hearted" ? (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={[styles.item, { color: "#2AEBB4" }]}>Hearted</Text>
            <Image source={commonIcons.checkedImg} style={styles.menuIcons} />
          </View>
        ) : (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={styles.item}>Hearted</Text>
            <Image
              source={commonIcons.defaultCheckedImg}
              style={styles.menuIcons}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuFlexView}
        onPress={() => onItemSelected("Favourite")}
      >
        {selectedItem === "Favourite" ? (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={[styles.item, { color: "#2AEBB4" }]}>Favourite</Text>
            <Image source={commonIcons.checkedImg} style={styles.menuIcons} />
          </View>
        ) : (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={styles.item}>Favourite</Text>
            <Image
              source={commonIcons.defaultCheckedImg}
              style={styles.menuIcons}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuFlexView}
        onPress={() => onItemSelected("Poem")}
      >
        {selectedItem === "Poem" ? (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={[styles.item, { color: "#2AEBB4" }]}>Poem</Text>
            <Image source={commonIcons.checkedImg} style={styles.menuIcons} />
          </View>
        ) : (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={styles.item}>Poem</Text>
            <Image
              source={commonIcons.defaultCheckedImg}
              style={styles.menuIcons}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuFlexView}
        onPress={() => onItemSelected("Story")}
      >
        {selectedItem === "Story" ? (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={[styles.item, { color: "#2AEBB4" }]}>Story</Text>
            <Image source={commonIcons.checkedImg} style={styles.menuIcons} />
          </View>
        ) : (
          <View style={[styles.menuFlexView, { flex: 1 }]}>
            <Text style={styles.item}>Story</Text>
            <Image
              source={commonIcons.defaultCheckedImg}
              style={styles.menuIcons}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};
