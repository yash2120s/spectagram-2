import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons"

let customFonts = {
  "Bubblegum-Sans": require("../assets/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <SafeAreaView style ={styles.droidSafeArea}/>
        <View style = {styles.cardContainer} >
        <Image source = {require("../assets/image_1.jpg")} style = {styles.storyImage}>
        </Image>
  <View style = {styles.titleCotainer}>
    <Text style = {styles.storyTitleText}> {this.props.story.title} </Text>    
        <Text style = {styles.storyAuthorText}> {this.props.story.author} </Text>
      <Text style = {styles.storyAuthorText}> {this.props.story.created_on} </Text>
       <Text style = {styles.descriptionText}> {this.props.story.description} </Text>
       
        </View>

<View style = {styles.actionContainer}> 
<View style = {styles.likeButton}>
<Ionicons name = {"heart"} 
size = {RFValue(30)}
color = {"white"} />

<Text style = {styles.likeText} > 100M </Text>

</View>
</View>

</View></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
titleCotainer:{
paddingLeft:RFValue(20),justifyContent:"center",
},
cardContainer: { margin: RFValue(13), backgroundColor: "#2f345d", borderRadius: RFValue(20) }, storyImage: { resizeMode: "contain", width: "95%", alignSelf: "center", height: RFValue(250) },
storyTitleText: { fontSize: RFValue(25), fontFamily: "Bubblegum-Sans", color: "white" }, storyAuthorText: { fontSize: RFValue(18), fontFamily: "Bubblegum-Sans", color: "white" },
descriptionText: { fontFamily: "Bubblegum-Sans", fontSize: 13, color: "white", paddingTop: RFValue(10) }, actionContainer: { justifyContent: "center", alignItems: "center", padding: RFValue(10) },
likeButton: { width: RFValue(160), height: RFValue(40), justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#eb3948", borderRadius: RFValue(30) },
likeText: { color: "white", fontFamily: "Bubblegum-Sans", fontSize: RFValue(25), marginLeft: RFValue(5) }

});
