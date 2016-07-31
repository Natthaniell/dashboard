declare var io;
let socket = io();

class AuthService {

    constructor() {
    }

    login(credentials) {
        console.warn('Auth.service:login');
        // console.info(io);
        // console.info(socket);
        socket.emit('auth:login', credentials);
        socket.once('auth:login:response', function(msg){
            console.warn(msg);
        });

    }
}


export default new AuthService();