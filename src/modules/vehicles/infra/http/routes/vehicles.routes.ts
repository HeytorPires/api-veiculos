import { Router } from 'express';
import VehicleController from '../controllers/VehiclesController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infra/http/middleware/isAuthenticated';

const vehicleRouter = Router();
const vehicleController = new VehicleController();

vehicleRouter.use(isAuthenticated);

// vehicleRouter.get('/', vehicleController.index);

vehicleRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  vehicleController.show
);

vehicleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
    },
  }),
  vehicleController.create
);

vehicleRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
    },
  }),
  vehicleController.update
);

vehicleRouter.delete('/:id', vehicleController.delete);

export default vehicleRouter;
