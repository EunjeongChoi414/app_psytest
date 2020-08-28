import React,{useEffect,useState} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity, Dimensions, ScrollView, Share, Linking} from 'react-native'

const Result = ({navigation, route}) => {

    const [state, setState] = useState({
        desc:'',
        //문제 이미지가 이 결과 페이지로 넘어와 세팅 되기 전엔 
        //이미지 엘리먼트의 source.uri 가 비어있는 상태이므로 준비 이미지를 미리 세팅!
        image:'https://spartacodingclub.kr/static/css/images/logo.png',
        question:'',
        answer:''
    })
    useEffect(()=>{
        const { desc,image,question,answer } = route.params;
        navigation.setOptions({
            title:'심리 테스트 결과는?'
        })
        setState({
            desc:desc,
            image:image,
            question:question,
            answer:answer
        })
    },[])

    const doShare = () => {
        // Share.share({
        //     message:`${state.question} \n\n ${state.answer} \n\n ${state.desc}`,
        // });
        Linking.openURL("http://www.naver.com")
          
    }

    return (
     
        <View style={styles.container}>
            <Image source={{uri:state.image}} resizeMode="cover" style={styles.resultImage}/>
            <ScrollView style={styles.resultBox}>
                <Text style={styles.resultText}>{state.desc}</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.goMainBtn} onPress={()=> navigation.navigate("TabNavigator")} >
                        <Text style={styles.btnText}>메인으로 가기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtn} onPress={()=>doShare()}>
                        <Text style={styles.btnText}>결과&문제 공유하기</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        height:100,
        width: Dimensions.get('window').width
    },
    resultBox: {
        flex:1,
        margin: 30,
        padding: 20,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "solid",
        

    },
    resultText: {
        lineHeight: 30,
        color:'#fff',
        fontSize: 15
        
    },
    buttons: {
        flex:1,
        padding:10,
        marginTop: 10,
        flexDirection: "row",
    },
    goMainBtn: {
        borderRadius:10,
        backgroundColor: "deeppink",
        padding: 10,
    },
    shareBtn: {
        borderRadius:10,
        backgroundColor: "lightgreen",
        padding: 10,
        marginLeft: 17,
    },
    btnText : {
        fontWeight: "bold",
    }
})