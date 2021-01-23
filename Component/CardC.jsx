import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardC = (props) => {
    return(
        <>
        <Card>
        <Card.Content>
          <Title style={{fontSize:'45px',marginBottom:'30px',textDecorationLine:'underline', textAlign:'center'}}>{props.title}</Title>
          <Paragraph style={{fontSize:'30px',marginBottom:'20px', textAlign:'center'}}>{props.content}</Paragraph>
          <text style={{textAlign:'center'}}>{'Create Date: ' + props.date}</text>
        </Card.Content>
      </Card>
        </>
    )
}



export default CardC;

