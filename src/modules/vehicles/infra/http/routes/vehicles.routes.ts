import {
  Router,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import VehicleController from '../controllers/VehiclesController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infra/http/middleware/isAuthenticated';
import HandlerVoid from '@config/HandlerVoid';

const vehicleRouter = Router();
const vehicleController = new VehicleController();
function midlewareNada(req: Request, res: Response, next: NextFunction) {
  next();
}
vehicleRouter.use(isAuthenticated);

vehicleRouter.get('/', midlewareNada, HandlerVoid(vehicleController.index));

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
      vin: Joi.string().required(),
      placa: Joi.string().required(),
      modelo: Joi.string().required(),
      data_entrega: Joi.date().required(),
      data_fabricacao: Joi.date().required(),
      data_venda: Joi.date().required(),
      pais_operação: Joi.string().required(),
      concessionaria_venda: Joi.string().required(),
      data_ultimo_reparo: Joi.date().required(),
      documento_proprietario: Joi.string().required(),
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
      placa: Joi.string().required(),
      modelo: Joi.string().required(),
      data_entrega: Joi.date().required(),
      data_fabricacao: Joi.date().required(),
      data_venda: Joi.date().required(),
      pais_operação: Joi.string().required(),
      concessionaria_venda: Joi.string().required(),
      data_ultimo_reparo: Joi.date().required(),
      documento_proprietario: Joi.string().required(),
    },
  }),
  vehicleController.update
);

vehicleRouter.delete('/:id', vehicleController.delete);

export default vehicleRouter;
