import { TextInput, Button, Snackbar  } from 'react-native-paper';
import CardC from './CardC';
import { View, StyleSheet } from 'react-native';
import AlertC from './AlertC';
import { getData } from '../api/api';
import { postData } from '../api/api';
import React, { useState, useEffect } from 'react';


const Input = () => {
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [list, setList] = useState([]);
  const [valid, setValid] = React.useState(null);

   useEffect(() => {
   async function fetchData() {
    
    const data = await getData();
    let result = [];
    
    for(let i = 0 ; i < data.length ; i++){
        result.unshift(data[i])
    }
      await setList(result)
   
  }
  fetchData();
  
  },[]);

  

  const clickHandel = async () => {
    await setValid(null);
    if(title && content){
        setContent('');
        setTitle('');
        let obj = {
            content,
            title,
            date: new Date().toString()
        }
        list.unshift(obj)
        postData(obj);
        setValid(true);
    }else{
        setValid(false);
    }
    
    console.log(list)
  }
  return (
      
    <>
    <TextInput
      style={{margin:'50px', marginBottom:'0px', marginTop:'10px'}}
      label="Title"
      value={title}
      onChangeText={title => setTitle(title)}
    />
    <TextInput
      style={{margin:'50px', marginBottom:'0px', marginTop:'10px'}}
      label="Enter Your To Do"
      value={content}
      onChangeText={content => setContent(content)}
    />
    <Button 
    style={{margin:'50px', marginTop:'20px', marginBottom:'65px'}}
    mode="contained" 
    onPress={clickHandel}>
    Save!
    </Button>
    {valid === false ? <AlertC/> : <></>}
    
    {list.map((card, index) =>{
            return (
              <CardC {...card} key={index}/>
            )
            
    })}
    
    </>
  );
};

export default Input;