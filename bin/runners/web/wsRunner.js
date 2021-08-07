const WebSocketServer =  require('ws');
const sio = require('socket.io'); 
 /**
  * Get port from environment and store in Express.
  */
 const run = (httpServer) => {
    const io = sio(httpServer);

    io.on('connection', (socket)=> {
        // let inform = null;
        socket.on('/chat', (data)=> {
            socket.broadcast.emit('/chat', data );
        });

        socket.on('disconnect', () => {
            // asd
        });
    });
}
module.exports = run;