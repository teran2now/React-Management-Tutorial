import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers =[{
  'id': 1,
  'image' : 'https://placeimg.com/64/64/any', 
  'name': '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}, 
{
 'id': 2,
'image' : 'https://placeimg.com/64/64/1', 
'name': '이재민',
'birthday' : '940614',
'gender' : '남자',
'job' : '취준생'
},
{
'id': 3,
'image' : 'https://placeimg.com/64/64/2', 
'name': '이재혁',
'birthday' : '971019',
'gender' : '남자',
'job' : '의경'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
     customers.map(c=>{  //map을 통해 반복을 줄여줄 수 있음
     return(
      <Customer
        key={c.id} // map 사용시 key 꼭 명시해줘야함
        id={c.id}
        image ={c.image}
        name = {c.name}
        birthday = {c.birthday}
        gender = {c.gender}
        job = {c.job}
        />       
     );
  })
}
</div>
    );
}
}

export default App;
