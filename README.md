# Sistema de Videoconferencia con Base en WebRTC
## Resumen
Durante la emergencia sanitaria generada por el COVID 19 un problema que se presento fue
la limitación de visitas hospitalarias para reducir riesgos que afecten la salud de la población,
esto perjudica tanto a los pacientes como a los familiares, ya que, no permite la convivencia
entre el paciente y el familiar y no se puede observar el estado de salud del paciente.

Aunque existan herramientas de software para realizar una videollamada, no todos los
hospitales pueden utilizalas, ya que, algunos hospitales no cuentan con una infraestructura
de comunicaciones requerida para utilizar estos softwares, no cuentan con los equipos
requeridos para instalar el software o simplemente no pueden adquirir el software por su
costo.

Este presente proyecto permite realizar videollamadas entre paciente-familiar mediante
dispositivos electrónicos que cuenten con un navegador web. El sistema se implementa en el
entorno de ejecución multiplataforma llamado NodeJS, mediante el sistema de gestión de
paquetes NPM se pueden utilizar los paquetes como Express, Socket IO, HTTPS, fs y
WebRTC, este último es el encargado de realizar el procedimiento para la comunicación
entre los dos dispositivos que van a realizar la videollamada. 

Al implementar este sistema se logra comunicar a los pacientes con sus familiares sin afectar la infraestructura de
comunicaciones del hospital, se logra utilizar dispositivos electrónicos con recursos mínimos
para la comunicación y permite ejecutar el sistema de videollamadas en cualquier sistema
operativo.

## Objetivos 

### Objetivos Generales
Construir un sistema de videoconferencia en tiempo real con base en una plataforma web
para uso de familiares-pacientes con COVID.

### Objetivos Especificos
1. Crear un servidor de conferencias para proveer la página inicial y sincronizar las
conexiones entre nodos.
2. Diseñar e implementar un módulo que registre nuevas salas de videoconferencia
para iniciar una reunión.
3. Diseñar e implementar un módulo que permita mostrar las salas de
videoconferencia existentes y poder seleccionar a cuál de ellas conectarse.
4. Diseñar e implementar un módulo que permita iniciar una conversación de
videoconferencia en la sala que fue creada o seleccionada.

## Desarrollo del Código
Para poder instalar las dependencias de node.js es necesario:
```
node install 
```

Para correr el servidor:
```
npm run dev 
```

La página para el familiar:
```
https://192.168.1.67:3000/Familiar/ 
```

La página para el paciente:
```
https://192.168.1.67:3000/Paciente/ 
```