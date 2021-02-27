import { db } from '../models/index.js';

const System = db.systems;

const findAll = async (_, res) => {
  try {
    const data = await System.find();

    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
const findByTag = async (req, res) => {
  if (req.params.tag.length === 0) {
    res.send('');
  } else {
    try {
      const data = await System.find(
        { tags: req.params.tag.toLowerCase() },
        {}
      );

      res.send(data);
    } catch (error) {
      console.log(error);
    }
  }
};
const addOne = async (req, res) => {
  const sistema = new System({
    name: req.body.name,
    divisao: req.body.divisao,
    url: req.body.url,
    environment: req.body.environment,
    description: req.body.description,
    tags: req.body.tags.map((tag) => tag.toLowerCase()),
  });

  System.find({ name: sistema.name }, (err, data) => {
    console.log(data);
    if (data.length < 1) {
      sistema.save((err, data) => {
        res.status(201).json({
          code: 201,
          message: 'Sistema adicionado com sucesso',
          systemAdded: data,
        });
      });
    } else {
      res.status(409).send({
        core: 409,
        message: 'Já existe um sistema com esse nome/ambiente',
        system: data,
      });
    }
  });
};

const updateOne = async (req, res) => {
  const sist = {
    name: req.body.name,
    divisao: req.body.divisao,
    url: req.body.url,
    environment: req.body.environment,
    description: req.body.description,
    tags: req.body.tags.map((tag) => tag.toLowerCase()),
  };
  try {
    const data = await System.findOneAndUpdate(
      { name: req.params.name },
      {
        upsert: true,
        runValidators: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    console.log(data);
    if (data) {
      res.status(200).json({
        code: 200,
        message: 'Sistema atualizado com sucesso',
        updatedSystem: data,
      });
    } else {
      console.log('Erro');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao atualizar o sistema');
  }
};

export default {
  updateOne,
  findAll,
  findByTag,
  addOne,
};
