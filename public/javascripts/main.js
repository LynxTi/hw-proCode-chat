const scoket = io();

const userLoginForm = document.querySelector('.loginForm');
const usersMesegesBlock = document.querySelector('.usersMeseges');
const formIserMesege = document.querySelector('.usersMeseges');
const formUserMesege = document.querySelector('.formUserMesege');

let userName;
// const chatChannel = new BroadcastChannel('chatChannel');

userLoginForm.addEventListener('submit', (ev)=> {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    userName = formData.get('userName');

    console.log(userName);
});

formUserMesege.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const userMesege = formData.get('userMesege');

        if (userMesege !== '') {
            scoket.emit('/chat', {usName: userName, userMesege: userMesege}, (data) => {
                usersMesegesBlock.innerHTML = data
            });
            // chatChannel.postMessage('HEY');
            // chatChannel.onmessage = (ev) => {
            //     console.log(ev.data);
            // }
        }
})

