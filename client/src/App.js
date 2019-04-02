import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'; //css 라이브러리
import Paper from '@material-ui/core/Paper'; // 컴포넌트의 외부를 감싸기 위함
import CircularProgress from '@material-ui/core/CircularProgress'; 

const styles = theme => ({
root :{
  width: "100%",
  marginTop : theme.spacing.unit*3,
  overflowX : "auto"
},
table: {
  minWidth:1080
},

progress:{
  margin : theme.spacing.unit*2
}

});



// TableHead는 맨위 속성 
// TableBody는 테이블의 내용을 나타냄
// classes란 변수를 만들어서 위에서 정의한 스타일이 적용될 수 있도록 만듦
// 데이터는 언제든 변경이 가능하기 때문에 customers 를 state변수로 선언
// props는 변경될 수 없는 내용
// api 서버에 접근해서 데이터를 받아오는 등의 작업 -> componentDidMount
// response 를 통해 접속하고자 하는 api주소를 넣어줌
// 그러한 고객 목록을 json형태로 body라는 변수에 넣어줌
// then으로 하여금 res라는 이름으로 바뀐다고 보면되고 customers라는 set변수에 집어 넣어주겠다는거

class App extends Component {
  
  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
   this.timer = setInterval(this.progress,20);
   this.callApi()
   .then(res=>this.setState({customers:res}))
   .catch(err=>console.log(err));
  }

  
  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

    progress = () => {
      const{completed} = this.state;
      this.setState({completed : completed >= 100 ? 0 : completed+1 });
    }
  render() {
    const { classes } = this.props;
    return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
    <TableHead>
    <TableRow>
    <TableCell>번호</TableCell>
    <TableCell>이미지</TableCell>
    <TableCell>이름</TableCell>
    <TableCell>생년월일</TableCell>
    <TableCell>성별</TableCell>
    <TableCell>직업</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {this.state.customers ? this.state.customers.map(c => {
    return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
    );}) : 
    <TableRow>
      <TableCell colSpan = "6" align="center" >
<CircularProgress className={classes.progress} variant="determinate" value ={this.state.completed}/>
        </TableCell>
    </TableRow>
    }
    </TableBody>
    </Table>
    </Paper>
    );
    }
    }
    
    

export default withStyles(styles)(App);