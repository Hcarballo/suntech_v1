import { Router } from "express";
import { passportCall } from "../middlewares/passportCall.middlewares.js";
import SessionController from "../controllers/session.controller.js";
import { authorization } from "../utils/authorizationJWT.js";

const sessionsRouter = Router();
const {
    login,
    register,
    logout,
    restablecer,
    resetpassword,
    funcPassport
} = new SessionController();

sessionsRouter.post('/login', login);

sessionsRouter.post('/register', register);

sessionsRouter.post('/restablecer', restablecer)

sessionsRouter.post('/resetpassword', resetpassword)

sessionsRouter.get('/current', passportCall('jwt'), authorization('admin'), funcPassport);

sessionsRouter.post('/logout', logout);

export default sessionsRouter;