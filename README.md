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
entre los dos dispositivos que van a realizar la videollamada. Al implementar este sistema se
logra comunicar a los pacientes con sus familiares sin afectar la infraestructura de
comunicaciones del hospital, se logra utilizar dispositivos electrónicos con recursos mínimos
para la comunicación y permite ejecutar el sistema de videollamadas en cualquier sistema
operativo.