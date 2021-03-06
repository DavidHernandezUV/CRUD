const { Client } = require('pg');
const Router = require('express-promise-router');
var keys = require('../confi/keys')


const client = new Client({
  connectionString: keys.postgresurl,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await client.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.post('/insertarpacientes', async (req, res) => {
  const { numid, nombre, apellido} = req.body;
  await client.query(
    `INSERT INTO pacientes(numid, nombre, apellidos) VALUES('${numid}','${nombre}','${apellido}')`
  );
  res.send('INSERTADO');
});

router.post('/actualizadatos', async (req, res) => {
  const { numid, nombre, apellido} = req.body;
  await client.query(
    `UPDATE pacientes SET numid = '${numid}', nombre = '${nombre}', apellidos = '${apellido}' WHERE numid = '${numid}'`
  );
  res.send('ACTUALIZADO');
});

router.post('/borrar', async (req, res) => {
  const { numid, nombre, apellido } = req.body;
  await client.query(
    `DELETE FROM pacientes WHERE numid = '${numid}'`
  );
  res.send('BORRADO');
});