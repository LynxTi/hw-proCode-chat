const httpRunner = require('./httpServ');
const wsRunner =  require('./wsRunner')
// const app = require('../../../servers/httpServer');

 const WebSocketServer = require('ws');
 

 const run = () => {
    const server = httpRunner();
    const ws = wsRunner(server);

//     //web Server
// const wss =  new WebSocketServer.Server( {server: server} );
// wss.on('connection', (ws) => {
//   console.log('bac: web socket ON');

//   ws.on('message', (message)=> {
//   console.log('Front send: ', message);

//   });

//   ws.send('blabla')
// });

}


module.exports = run;