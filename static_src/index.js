import React from 'react';
import ReactDOM from 'react-dom';

const content = 'Кажется, мы подключили React!';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    let res = props.messages.map(message => <MessageComponent text={message} />);
    res.push(<AddBtn />)
    return res
}

const AddBtn = () =>  <button onClick={() => {
    messages.push('Нормально')
    ReactDOM.render(
        <MessageField messages={messages} />,
        document.getElementById('root'),
    );
}}>Добавить</button>

ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById('root'),
);