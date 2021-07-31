const WebSocketServer =  require('ws');
const sio = require('socket.io'); 
const broadcastChannel = require('broadcast-channel')
 /**
  * Get port from environment and store in Express.
  */
 const run = (httpServer) => {
    let htmlhMeseges ='';

    const io = sio(httpServer);

    io.on('connection', (socket)=> {

        socket.on('/chat', (data, cb)=> {
            console.log('data: ', data);
            const { usName, userMesege } = data;

            htmlhMeseges += `<div>${usName}:<div>
                <div>${userMesege}</div>
                <br>`;
                console.log(htmlhMeseges);
                cb(htmlhMeseges);
        })
        socket.on('disconnect', () => {
            // asd
        })
    })
        //web Server
//     const wss =  new WebSocketServer.Server( {server: server} );
//     wss.on('connection', (ws) => {
//     console.log('bac: web socket ON');

//     ws.on('message', (message)=> {
//     console.log('Front send: ', message);

//     });

//     ws.send('blabla')
// });
}
module.exports = run;