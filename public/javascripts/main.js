// const { socket } = require("socket.io");
const socket = io();

const userLoginForm = document.querySelector('.loginForm');
const usersMesegesBlock = document.querySelector('.usersMeseges');
const formUserMesege = document.querySelector('.formUserMesege');
const chatBlock = document.querySelector('.chatBlock');

const addNewMesege = (userName, userMesege) => {
    const html = `<div>${userName}: ${userMesege}`;
    usersMesegesBlock.insertAdjacentHTML('beforeend', html); 
}

let userName;

userLoginForm.addEventListener('submit', (ev)=> {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    userName = formData.get('userName');

    userLoginForm.classList.remove('showBlock');
    chatBlock.classList.add('showBlock');
});

formUserMesege.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const userMesege = formData.get('userMesege');

        if (userMesege !== '') {
            socket.emit('/chat', { userName: userName, userMesege: userMesege });
            addNewMesege(userName, userMesege);
        }

        socket.on(`/chat`, (data) => {
            const { userName, userMesege } = data;
            addNewMesege(userName, userMesege);
        });
})

