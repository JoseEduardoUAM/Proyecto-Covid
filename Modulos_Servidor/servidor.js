//Módulo local Dep.js
const Dep = require('./Dependencias.js');

//Se agrega el puerto 3000
Dep.app.set( 'port' , process.env.PORT || 3000 );

//Dirección de los archivos estaticos
Dep.app.use( Dep.express.static( Dep.path.join( __dirname , '..' , 'Public' ) ) );
Dep.app.use( Dep.express.static( Dep.path.join( __dirname , '..' , 'Public' , 'Sala' ) ) );

///Documentos estaticos
Dep.app.use('/Familiar', Dep.express.static( Dep.path.join( __dirname , '..' , 'Public' , 'Familiar' ) ));
Dep.app.use('/Paciente', Dep.express.static( Dep.path.join( __dirname , '..' , 'Public' , 'Paciente' ) ));

//Dirección de motor de plantilla
Dep.app.set( 'views' , Dep.path.join( __dirname , '..' , 'Public' , 'Sala' ) );

//Motor de plantilla
Dep.app.set( 'view engine' , 'ejs' );

//Middleware que analiza archivos urlencoded en solicitudes post
Dep.app.use(Dep.express.urlencoded({ extended: true }));

//Documentos dinamicos con ejs
Dep.app.post( '/:id' , (req,res) => {
    if( req.body.persona == "familiar" ){
        res.render( 'index' , {
            nombre : req.body.nombreFamiliar + " " + req.body.apellidosFamiliar,
            url : req.body.url,
            regresar : "https://192.168.1.67:3000/Familiar"
        });
    }else if( req.body.persona == "paciente" ){
        res.render( 'index' , {
            nombre : req.body.nombrePaciente,
            url : req.body.url,
            regresar : "https://192.168.1.67:3000/Paciente"
        });
    }
});

//Configuracion del Servidor https
const server = Dep.https.createServer( {
  cert : Dep.fs.readFileSync( Dep.path.join( __dirname , '..' , 'Certificados' , 'cert.pem' ) ),
  key : Dep.fs.readFileSync( Dep.path.join( __dirname , '..' , 'Certificados' , 'key.pem' ) )
} , Dep.app ).listen( Dep.app.get('port') , function() {
  console.log('Servidor https corriendo en puerto ' , Dep.app.get('port'));
});

module.exports = {
	app: Dep.app,
	server: server
}
