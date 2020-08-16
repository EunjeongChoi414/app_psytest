import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width; 

const image1 = { uri: "https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg" };
const image2 = { uri: "https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"};
const image3 = { uri: "https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409081714.jpg"};

export default function App() {
  return (
      <View style={styles.container}>

        <ScrollView style={styles.navScrollView} horizontal>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navText}>전체</Text>
            </TouchableOpacity>
        </ScrollView>

        <ScrollView style={styles.content}>
            <View style={styles.oneLine}>
                <ImageBackground source={image1} style={styles.image}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </TouchableOpacity>  
                </ImageBackground>
                <ImageBackground source={image2} style={styles.image}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </TouchableOpacity>  
                </ImageBackground>
                <ImageBackground source={image3} style={styles.image}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </TouchableOpacity>  
                </ImageBackground>
            </View>
        </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    navScrollView: {
        backgroundColor: "black", 
        borderColor: "white",
        height: 20
    },
    navText: {
        color: "white"
    },

    content: {
        display: "flex",
        flexWrap: "wrap",
        width: windowWidth,
    },
    oneLine: {
        height: windowWidth/3
    },
    image: {
        width: windowWidth/3,
        height: windowWidth/3
    },
    imageText: {
        flexDirection: "flex-end",
        color: "white"
    }
});
