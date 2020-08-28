import React, {useEffect} from "react";
import {View,Text,StyleSheet} from "react-native"

export default History = ({navigation}) => {

    //navigation 속성에 들어 있는 함수중 addListener를 사용하여, 자바스크립트때 'focus'일 때,
//즉, 지금 보고 있는 페이지가 도달 할 때마다 어떠한 로직이 실행되게끔 코드를 구성할 수 있습니다. 
useEffect(()=>{
    navigation.addListener('focus', () => {
       console.log("탭을 누를때마다 실행 시킬 로직을 여기에 작성!")  
  });
},[])

    return (<View style={styles.readyContainer}><Text style={styles.readyText}>히스토리 페이지입니다...</Text></View>)
}

const styles = StyleSheet.create({
    //준비화면 스타일
    readyContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    readyText: {
      color:'#fff'
    }
  });