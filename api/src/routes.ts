import { Router } from 'express';
import UserController from './controllers/UserController';
import SurveyController from './controllers/SurveyController';
import SendMailController from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);

router.get('/surveys', surveyController.show);
router.post('/surveys', surveyController.create);

router.post('/sendMail', sendMailController.execute);

export default router;
