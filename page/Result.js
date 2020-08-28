import React,{useEffect,useState} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity, Dimensions} from 'react-native'

const Result = ({navigation, route}) => {

    // 복습겸 다시 써보는 해체 할당 방식의 변수 정의!
    const {result} = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title:'심리 테스트 결과는? '
        })
    },[])
    return (
     
        <View style={styles.container}>
            <Image source={{uri:"https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409010980.jpg"}} resizeMode="cover" style={styles.resultImage}/>
            <View style={styles.resultBox}>
                <Text style={styles.resultText}>{result}</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.goMainBtn} onPress={()=> navigation.navigate("TabNavigator")} >
                        <Text style={styles.goMainBtnText}>메인으로 가기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtn}>
                        <Text style={styles.shareBtnText}>결과문제 공유하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#000",
        alignItems: "center"
    },
    resultImage: {
        marginTop: 40,
        height:100,
        width: Dimensions.get('window').width
    },
    resultBox: {
        width: 330,
        height: 550,
        marginTop: 30,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "solid",
        

    },
    resultText: {
        fontSize:18,
        color:'#fff',
        margin: 22
    },
    buttons: {
        flexDirection: "row",
        marginLeft: 32
    },
    goMainBtn: {
        borderRadius:10,
        backgroundColor: "hotpink",
        padding: 10
        
    },
    shareBtn: {
        borderRadius:10,
        backgroundColor: "green",
        padding: 10,
        marginLeft: 30,
    },
    goMainBtnText : {
        color: "black",
        fontWeight: "bold",
    },
    shareBtnText: {
        color: "black",
        fontWeight: "bold",
    }

})