import { StyleSheet, Platform } from "react-native";
var Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
var windowSize = Dimensions.get("window");

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    flex: 0.15,
    height: Platform.OS === "ios" ? 44 : 40,
    backgroundColor: "#F5F5F5"
  },
  miniContainer: {
    flex: 0.85,
    backgroundColor: "white",
    justifyContent: "center"
  },
  splitingHeaderView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#F5F5F5"
  },
  leftside_Header_Menu: { flex: 0.45, justifyContent: "flex-end", padding: 10 },
  rightside_Header_Menu: { flex: 0.15, justifyContent: "flex-end" },
  middle_Header_title: { flex: 0.4, justifyContent: "flex-start" },
  menu_button: { position: "absolute", padding: 10 },
  title: { fontSize: 30, fontWeight: "bold", color: "#1F1617" },
  button: { position: "absolute", top: 20, padding: 10 },

  // menuStyles sheet

  menuContainerView: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 15,
    paddingTop: 45,
    backgroundColor: "#4E4E4E",
    padding: 15
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: "absolute"
  },
  item: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },

  // listScreen.js file styles

  list_title: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "700",
    color: "grey",
    marginLeft: 1,
    marginTop: 5
  },
  dateTextLabel: {
    fontSize: 11,
    textAlign: "left",
    fontWeight: "700",
    color: "grey",
    marginLeft: 2,
    marginTop: 5
  },
  rowmainView: { height: 100, borderBottomWidth: 1, borderColor: "lightgrey" },
  rowsubview: { flex: 1, flexDirection: "row" },
  rowtitleView: { flex: 0.75, justifyContent: "flex-start", padding: 15 },
  iconsMainView: { flex: 0.25 },
  iconssubView: { flex: 1, flexDirection: "row", paddingTop: 5 },
  iconView: { flex: 0.5, justifyContent: "flex-start", padding: 10 },
  iconprop: { height: 23, width: 23 },
  menuIcons: { height: 18, width: 18 },
  cancelIcon: { height: 15, width: 15 },
  deleteIcon: { height: 28, width: 28 },
  deleteIconView: { flex: 1, justifyContent: "center", alignItems: "center" },
  splitView: { flex: 1 },
  menuFlexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 7
  },

  //DetailsScreen.js.... styles here.

  bodyMainView: {
    flex: 0.85,
    padding: 10
  },
  titleObjView: { flex: 0.15, backgroundColor: "#F5F5F5" },
  emptyView: { flex: 0.23, backgroundColor: "#F5F5F5" },
  dateTextLabel: {
    textAlign: "left",
    fontSize: 14,
    color: "grey",
    marginTop: 4,
    fontWeight: "600"
  },
  titleTextLabel: {
    textAlign: "left",
    fontSize: 26,
    color: "black",
    fontWeight: "bold"
  },
  titleValMainView: {
    flex: 0.65,
    backgroundColor: "#F5F5F5",
    justifyContent: "flex-start"
  },
  spaceView: { flex: 0.12, backgroundColor: "#F5F5F5" },
  titleRowView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  exampleText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  // Details Screen Text Input
  paragraphStoryStyles: {
    height: windowSize.height,
    textAlign: "justify",
    fontSize: 16,
    width: windowSize.width - 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 6
  },
  detailsSubContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    alignItems: "center"
  }
}));
