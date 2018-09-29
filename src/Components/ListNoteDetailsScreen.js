import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import styles from "./styles";
import CommonHeader from "@Headercomponent/CommonHeader";

export default class ListNoteDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDetails_Object: this.props.viewDetails
    };
  }

  titleObj() {
    let { titleVal, datetextVal } = this.state.viewDetails_Object;
    return (
      <View style={styles.titleRowView}>
        <View style={styles.spaceView} />
        <View style={styles.titleValMainView}>
          <Text style={styles.titleTextLabel} numberOfLines={2}>
            {titleVal}
          </Text>
          <Text style={styles.dateTextLabel} numberOfLines={2}>
            {datetextVal}
          </Text>
        </View>
        <View style={styles.emptyView} />
      </View>
    );
  }

  maincontentParagraph() {
    let { paragraphStory } = this.state.viewDetails_Object;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Text style={{ textAlign: "justify" }}>{paragraphStory}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  render() {
    let { titleVal } = this.state.viewDetails_Object;
    return (
      <View style={styles.container}>
        <CommonHeader title={titleVal} />
        <View style={styles.container}>
          <View style={styles.titleObjView}>{this.titleObj()}</View>
          <View style={styles.bodyMainView}>{this.maincontentParagraph()}</View>
        </View>
      </View>
    );
  }
}
