import express from 'express';
import controller from '../controller/systemController.js';

const app = express();

// Get All Sistemas
app.get('/api/sistemas/', controller.findAll);
app.post('/api/sistemas/add', controller.addOne);
app.get('/api/sistemas/:tag', controller.findByTag);
app.put('/api/sistemas/:name', controller.updateOne);

// router.put('/api/sistemas/edit/:id', (req, res) => {
//   const sist = {
//     name: req.body.name,
//     environment: req.body.environment,
//     description: req.body.description,
//     tags: req.body.tags,
//   };

//   Sistema.findByIdAndUpdate(
//     req.params.id,
//     { $set: sist },
//     { new: true },
//     (err, data) => {
//       if (!err) {
//         res.status(200).json({
//           code: 200,
//           message: 'Sistema atualizado com sucesso',
//           updatedSystem: data,
//         });
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

export { app as systemRouter };
