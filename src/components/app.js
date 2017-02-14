import React from 'react';
import message from '../util/util';

const sayMessage = (me) => {
    return message.formatMessageUpperCase(me)
}

const app = (props) => {
    return (
        <h1 class="message">
        {sayMessage('teste para uppercase')}
        </h1>
    );
}

export default app;