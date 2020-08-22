//useEffect 또한 리액트에서 제공해주는 훅.기능 이므로 가져와 사용합니다.

import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';
//component 폴더에 만든 ButtonCard 컴포넌트를 불러옵니다.
import ButtonCard from "./components/ButtonCard";
import Category from "./components/Category";
import data from "./data.json";
import category from "./category.json"

export default function App() {

  //data.json 데이터 구조를 보면 딕셔너리 리스트 복합 구조입니다.
  //question 키값에 문제들이 리스트 형태로 존재합니다.
  //그래서 상태에 문제 데이터를 넣어 초기화 했습니다.
  const [state,setState] = useState([])

  //category.json 데이터 역시 data란 키에 물려있는 리스트 데이터이므로
  //곧바로 categoryState 상태를 데이터와 함께 초기화 했습니다.
  const [categoryState,setCategoryState] = useState([])

  //useEffect라는 함수에 콜백 함수를 첫번째 인자로, 두번 째 인자로는 리스트를 넘겨줍니다.
  //기본 사용법입니다.

  //그리고 이 콜백 함수 안에 자동으로 구현되어야 할 로직을 작성해 넣으면 됩니다.
  useEffect(()=>{
    console.log("나 처음이자 마지막으로 실행 된다~~")
    setState(data.question)
    setCategoryState(category.data)
  },[])


  //그럼 상태에는 문제 데이터가 리스트형태로 들어 있곘죠? 콘솔에서 확인해보세요
  // console.log(categoryState)

  return (
    <View style={styles.container}>
      <ScrollView>
                {/* 수평 스크롤을 위해선 horizontal 속성을 입력! */}
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {/* 화면 레이아웃을 건드리지 않으면서 버튼과 같은 효과를 내주는 엘리먼트 */}
                    {/* Category 컴포넌트를 카테고리 데이터 갯수만큼 반복문을 돌립니다
                      반복적으로 컴포넌트를 사용할 땐, 반드시 key 속성을 부여해주고, 
                      map의 두번 째 인자 인덱스 번호를 넘겨줘야 합니다.
                    */}
                    {categoryState.map((c,i)=>{
                      return <Category key={i} title={c.title}/>
                    })}
                    
                  </ScrollView>
                </View>
                {/* 카드가 한 줄 씩 세개가 늘어날 영역 */}
                <View style={styles.vScrollView}>

                  {/* 
                    jsx에서 자바스크립트를 사용하려면 중괄호 안에서 사용해야 합니다. 
                    어려운 내용은 없지만 3주차에 더 자세히 배웁니다 
                  */}

                  {/* map 반복문으로 컴포넌트를 여러번 반복 사용할 때는, 
                      반드시 컴포넌트 key 속성에 map 순회 인덱스 번호를 넘겨줘야 합니다
                      고유 하다는 것을 알려줘야 해서요!
                  */}
                  {state.map((data,i)=>{
                    //반복으로 돌면서 컴포넌트를 반환합니다.
                    //어디로 여러분이 만든 컴포넌트를 화면에 보여줘야 하니까
                    //결국 return 으로 반환하며화면을 그려줘야 합니다.
                    return <ButtonCard key={i} title={data.title} image={data.image}/>
                  })}
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
  category:{
    width:100,
    height:30,
    marginTop:30,
    marginRight:5,
    marginLeft:13,
    borderRadius:5,
    borderColor:'#fff',
    borderWidth:1,
    borderStyle:'solid'
  },
  categoryMain:{
    width:100,
    height:30,
    marginTop:30,
    marginRight:5,
    marginLeft:13,
    borderRadius:5,
    borderColor:'hotpink',
    borderWidth:1,
    borderStyle:'solid'
  },
  categoryMainTitle:{
    color:'hotpink',
    textAlign:'center',
    marginTop:6
  },
  categoryTitle: {
    color:'#fff',
    textAlign:'center',
    marginTop:6
  },
  vScrollView: {
    marginTop:20,
    //flexDirection 속성이 row면 우측으로 나열, column이면 수직으로 나열
    flexDirection: 'row',
    //flex:"wrap" 속성의 경우 박스들이 화면을 넘칠 때 자동으로 밑으로 떨어져 내려가 배치됨
    flexWrap:"wrap"
  },
});