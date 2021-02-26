import { db } from '../models/index.js';

const Server = db.servers;

const findAll = async (_, res) => {
  try {
    const data = await Server.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const addOne = async (req, res) => {
  const server = new Server({
    name: req.body.name,
    ip: req.body.ip,
    os: req.body.os,
    memory: req.body.memory,
    cpu: req.body.cpu,
  });

  Server.find({ name: server.name }, (err, data) => {
    console.log(data);
    if (data.length < 1) {
      server.save((err, data) => {
        res.status(201).json({
          code: 201,
          message: 'Server adicionado com sucesso',
          serverAdded: data,
        });
      });
    } else {
      res.status(409).send({
        core: 409,
        message: 'Já existe um server com esse nome',
        server: data,
      });
    }
  });
};

export default { findAll, addOne };
