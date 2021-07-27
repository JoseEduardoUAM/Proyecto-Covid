//Módulo local Servidorvidor.js
const Servidor = require('./servidor.js');

//Módulo local Funciones.js
const Funcion = require('./funciones.js');

//Módulo SocketIO que permite crear aplicaciones web en tiempo real.
//Permite la comunicación bidireccional en tiempo real entre el cliente y el Servidorvidor web.
const SocketIO = require('socket.io');

//Implementacion de SocketIO en el Servidorvidor
const io = SocketIO(Servidor.server);

let Salas = [];

io.on('connection' , (socket) => {

	socket.on( 'solicitarURL' , () => {
		let url = 'https://192.168.1.67:3000/' + Funcion.generarURL();
		socket.emit('recibirURL' , url );
	});

	socket.on( 'solocitarSalas' , () => {
		socket.emit('salasPrevias' , Salas );
	});

	socket.on( 'nuevaSala' , (datos) => {
		Salas.push( datos );
		io.sockets.emit( 'agregarSala' , datos );
	});

	//Se une a la sala del url y si existen 2 clientes conectados emite su id
	socket.on( 'unirseSala' , (url) => {
		console.log( 'El cliente ' + socket.id + " entro"  );
		socket.join(url);
		let usuarios = io.sockets.adapter.rooms.get(url);
	      usuarios.forEach(( x ) => {
	          if( x != socket.id ){
	              socket.emit('other-users',x);
	              console.log( x );
	          }
	      });
	});

	// Enviar oferta para iniciar la conexión
    socket.on('offer', (socketId, description) => {
      socket.to(socketId).emit('offer', socket.id, description);
    });

    // Enviar respuesta de solicitud de oferta
    socket.on('answer', (socketId, description) => {
      socket.to(socketId).emit('answer', description);
    });

    // Enviar señales para establecer el canal de comunicación
    socket.on('candidate', (socketId, candidate) => {
      socket.to(socketId).emit('candidate', candidate);
    });

});
