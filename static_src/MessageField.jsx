import React from 'react';
import Message from './Message';


const botAnswers = ['Отстань, я робот', 'Кто такая Сири????!!!', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{text: 'Привет!', author: 'Human'}, {text: 'Как дела?', author: 'Human'}],
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length-1].author !== 'Bot') {
            setTimeout(() => this.setState({ 'messages': [...messages, {text: randomChoice(botAnswers), author: 'Bot'}] }), 0);
        }
    }

    handleSendMessage = () => {
        const { messages } = this.state;
        this.setState({ 'messages': [...messages, {text: 'Нормально', author: 'Human'}]});
    };

    render() {
        const { messages } = this.state;

        const messageElements = messages.map(message => <Message key={ message.text } text={ message.text } author={message.author} />);

        return (
            <div>
                <h1>Чат</h1>
                { messageElements }
                <button onClick={ this.handleSendMessage }>Отправить сообщение</button>
            </div>
        )
    }
}