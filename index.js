import pkg from "pg";
const { Pool } = pkg;
const arg = process.argv.slice(2);

import {
  newStudent,
  getStudent,
  allStudent,
  updateStudent,
  destroy,
} from "./consult.js"; // modulos importados

// 1. Realizar la conexión con PostgreSQL, utilizando la clase Pool y definiendo un
// máximo de 20 clientes, 5 segundos como tiempo máximo de inactividad de un
// cliente y 2 segundos de espera de un newStudent cliente.

const config = {
  user: "",
  host: "localhost",
  password: "",
  database: "class",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

const typeFuncion = arg[0];
const name = arg[1];
const rut = arg[2];
const course = arg[3];
const level = arg[4];

pool.connect(async (error_conection, client, release) => {
  if (error_conection) {
    // si hay error en la conxión

    console.error(error_conection.code, error_conection.message);
  } else {
    switch (
      typeFuncion // selección de argumentos
    ) {
      case "allStudent":
        await allStudent(client);
        break;
      case "newStudent":
        await newStudent(name, rut, course, level, client);
        break;
      case "updateStudent":
        await updateStudent(name, rut, course, level, client);
        break;
      case "getStudent":
        await getStudent(name, client);
        break;
      case "destroy":
        await destroy(name, client);
        break;
      default:
        console.log("no se reconoce el primer argumento ingresado");
        break;
    }
    // 4. Liberar a un cliente al concluir su consulta.

    release();
    pool.end();
  }
});
