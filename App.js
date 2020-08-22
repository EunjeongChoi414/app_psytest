import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollView>
            <View>
                <ScrollView horizontal={true}>
                    <TouchableOpacity>
                        <View style={styles.categoryMain}>
                            <Text style={styles.categoryMainTitle}>전체</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>무의식심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>짝사랑심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>연애심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>색체심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>대인관계심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>스트레스심리</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.category}>
                            <Text style={styles.categoryTitle}>IQ테스트</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.vScrollView}>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>  
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409063001.jpg"}} resizeMode="cover" style={styles.scrollList}>
                        <Text style={styles.imageText}>네모네모 영역</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    categoryMain: {
        width: 100,
        height: 30,
        borderColor: 'hotpink',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 15
        
    },
    categoryMainTitle: {
        color: 'hotpink',
        textAlign: 'center', 
        marginTop: 4
    },
    category: {
        width: 100,
        height: 30,
        borderColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 15
        
    },
    categoryTitle: {
        color: '#fff',
        textAlign: 'center', 
        marginTop: 4
    },
    scrollList: {
        width: Dimensions.get("window").width/3,
        height: Dimensions.get("window").height/5
    },
    vScrollView: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageText: {
        flex: 1,
        textAlign: 'right',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        fontWeight: '700'
    }
});