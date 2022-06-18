Proyecto Always Music 2.0 del Módulo 7 realizado para el Bootcamp Desafio Latam

Para comenzar el proyecto se necesita primero:
- Llegar al directorio desde el terminal
- Instalar la dependencia con el comando npm i pg
- Crear Base de datos en postgresql, datos incluidos en el archivo index.sql

Luego para probar que la aplicacion funciona de forma correcta, lo podemos realizar de la siguiente forma, (todos los datos en los parametros son optativos):
* "Agregar un nuevo estudiante."
   - en el terminal, escribir el siguiente comando 
    node index.js newStudent Maria 16746252-1 acordeon 8

* "Consultar los estudiantes registrados."
   - en el terminal, escribir el siguiente comando 
    node index.js allStudent

* "Consultar estudiante por rut."
   - en el terminal, escribir el siguiente comando 
    node index.js getStudent 16746252-1

* "Actualizar la información de un estudiante."
   - en el terminal, escribir el siguiente comando 
    node index.js updateStudent Maria 16746252-1 piano 8

* "Eliminar el registro de un estudiante."
   - en el terminal, escribir el siguiente comando 
    node index.js destroy 16746252-1


Proyecto realizado en grupo por:
- Yeminson Sanchez
- Fabian Pino
- Linian Nahuelhual
- Juan Rodriguez

