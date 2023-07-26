import React from 'react';
import io from 'socket.io-client';
import appConfig from '../app/config/app.config';

const Chat = () => {
    const [time, setTime] = React.useState('fetching')
    React.useEffect(() => {
        const socket = io(appConfig.baseUrl)
        // socket.on('connect', () => console.log(socket.id))
        // socket.on('connect_error', () => {
        //     setTimeout(() => socket.connect(), 5000)
        // })
        console.log(socket);
        socket.on('time', (data) => setTime(data))
        socket.on('disconnect', () => setTime('server disconnected'))

    }, [])
    return (
        <div className="App">
            {time}
        </div>
    )
}

export default Chat;
