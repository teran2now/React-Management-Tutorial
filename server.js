const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
    res.send(
        [
            {
             'id' :1,
             'image' : 'https://placeimg.com/64/64/1',
             'name' : '이재민',
             'birthday' : '940614',
             'gender' : '남자',
             'job' : '프로그래머' 
            },
            {
              'id' :2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '이재혁',
              'birthday' : '971019',
              'gender' : '남자',
              'job' : '의경' 
             },
             {
              'id' :3,
              'image' : 'https://placeimg.com/64/64/3',
              'name' : '웅재웅',
              'birthday' : '999999',
              'gender' : '남자',
              'job' : '서버프록서' 
             }
          ]
    );
});

app.listen(port,()=>console.log(`Listening on port ${port}`));
