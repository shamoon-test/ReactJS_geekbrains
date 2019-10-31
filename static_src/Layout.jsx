import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import PropTypes from 'prop-types';

const botAnswers = ['Отстань, я робот', 'Кто такая Сири????!!!', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class Layout extends React.Component {
    state = {
        chats: [[1, 2], [], [], [], []],
        messages: [{ text: 'Привет!', sender: 'bot' }, { text: 'Как дела?', sender: 'bot' }],
        input: '',
    };
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
    
    componentDidUpdate(prevProps, prevState) {
        if ((this.state.messages[this.state.messages.length - 1].sender !== 'bot')
            && prevState.messages.length < this.state.messages.length) {
            setTimeout(() => this.sendMessage(randomChoice(botAnswers), 'bot'), 1000);
        }
    }
    addChat = () => {
        console.log(this.state.chats)
        this.setState({chats: [...this.state.chats,[]]})
    }
    sendMessage = (message, sender) => {
        if (message !== '') {
            const { chats } = this.state;
            chats[this.props.chatId - 1] = [...chats[this.props.chatId - 1], this.state.messages.length + 1];
            this.setState({ chats: chats, messages: [...this.state.messages, { text: message, sender }] });
        }
    };

    render() {
        return (
            [<Header />,
            <div className="layout">
                <ChatList chats={ this.state.chats } addChat={ this.addChat } /><MessageField chats={ this.state.chats } messages={ this.state.messages } chatId={ this.props.chatId } sendMessage={ this.sendMessage } />
            </div>]
        )
    }
}