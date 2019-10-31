import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

export default class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.array.isRequired,
    addChat: PropTypes.func.isRequired,
}
  
  render() {
    let chatsRender = [];
    for(let i=1;i<=this.props.chats.length;i++){
      chatsRender.push(<Link to={"/chat/"+i}>
                    <ListItem
                      primaryText={"Чат "+i}
                      leftAvatar={<Avatar src="/static/images/avatar.png" />}
                    />
                  </Link>)
    }
return (
    <div className="chatList">
      <List>
        <Subheader>Недавние чаты</Subheader>
        {chatsRender}
        
        <RaisedButton label="Создать новый чат" style={{margin: 12}} onClick={() => this.props.addChat()} />
      </List>
    </div>
  );
}
}
