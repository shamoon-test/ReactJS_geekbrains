import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import './styles/styles.css';
import PropTypes from 'prop-types';


export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chats: PropTypes.array.isRequired,
        messages: PropTypes.array.isRequired,
        sendMessage: PropTypes.func.isRequired
    }
    static defaultProps = {
        chatId: 1
    }
    state = {
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom();
    }

    handleClick = (message) => {
        this.props.sendMessage(message)
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.props.sendMessage(message, 'me')
            this.setState({ input: '' })
        }
    };
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    render() {
        
        const { chatId } = this.props;
        const messageElements = this.props.chats[chatId - 1].map(messageId => <Message key={messageId} text={this.props.messages[messageId - 1].text} sender={this.props.messages[messageId - 1].sender} />);

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
                    <FloatingActionButton onClick={() => this.props.sendMessage(this.state.input, 'me')}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

            </div>
        )
    }
}