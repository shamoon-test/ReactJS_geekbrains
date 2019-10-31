import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import './styles/styles.css';


const botAnswers = ['Отстань, я робот', 'Кто такая Сири????!!!', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: 'Привет!', sender: 'bot' }, { text: 'Как дела?', sender: 'bot' }],
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.messages[this.state.messages.length - 1].sender !== 'bot')
            && prevState.messages.length < this.state.messages.length) {
            setTimeout(() => this.setState({ 'messages': [...this.state.messages, { text: randomChoice(botAnswers), sender: 'bot' }] }), 1000);
        }
        this.scrollToBottom();
    }

    sendMessage = (message) => {
        if (message !== '')
            this.setState({ messages: [...this.state.messages, { text: message, sender: 'me' }] });
    };

    handleClick = (message) => {
        this.sendMessage(message)
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
            this.setState({ input: '' })
        }
    };
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    render() {
        const { messages, index } = this.state;

        const messageElements = messages.map(message => <Message key={index} text={message.text} sender={message.sender} />);

        return (
            <div className="messageContainer">
                <div className="message-field">
                    {messageElements}
                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>

                <div className="inputField">
                    <TextField
                        ref={this.textInput}
                        name="input"
                        fullWidth={true}
                        hintText="Введите сообщение"
                        style={{ fontSize: '22px' }}
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
                    />
                    <FloatingActionButton onClick={() => this.handleClick(this.state.input)}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

            </div>
        )
    }
}