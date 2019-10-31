import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';

export default class Layout extends React.Component {

    render() {
        return (
            [<Header />,
            <div className="layout">
                <ChatList /><MessageField />
            </div>]
        )
    }
}