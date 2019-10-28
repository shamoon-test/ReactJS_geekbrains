import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const ListExampleChat = () => (
    <div className="chatList">
      <List>
        <Subheader>Недавние чаты</Subheader>
        <ListItem
          primaryText="Злой бот"
          leftAvatar={<Avatar src="static_src/images/avatar.png" />}
        />
        <ListItem
          primaryText="Добрый бот"
          leftAvatar={<Avatar src="static_src/images/avatar.png" />}
        />
        <ListItem
          primaryText="Тупой бот"
          leftAvatar={<Avatar src="static_src/images/avatar.png" />}
        />
        <ListItem
          primaryText="Умный бот"
          leftAvatar={<Avatar src="static_src/images/avatar.png" />}
        />
        <ListItem
          primaryText="Бот повторюшка"
          leftAvatar={<Avatar src="static_src/images/avatar.png" />}
        />
      </List>
    </div>
  );
  
  export default ListExampleChat;