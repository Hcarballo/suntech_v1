import { createHash } from "../utils/bcrypt.js";
import { userService } from "../service/index.js";

class UserController {
    constructor() {
        this.service = userService;
    };

    getUsers = async (req, res) => {
        try {
            const users = await this.service.getUsers();
            if (users.length == 0) {
                return res.send('No hay Usuarios Registrados');
            }
            return res.send({ status: 'success', payload: users });
        } catch (error) {
            console.log(error);
        }
    };

    createUser = async (req, res) => {
        const {
            first_name,
            last_name,
            email,
            password,
        } = req.body;

        if (!first_name || !last_name || !email || !password) return res.send('Error');

        try {
            const newUser = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                last_connection: `Login - ${new Date().toLocaleString()}`,
                password: createHash(password)
            }

            const result = await this.service.createUser(newUser);
            if (result) {
                return res.send({ status: 'success', message: 'usuario registrado' });
            }
            return res.status(401).send({ status: 'error', message: 'No se completo el Registro' });

        } catch (error) {
            console.log(error);
        }
    };

    getUserById = async (req, res) => {
        const { uId } = req.params;
        try {
            const result = await this.service.getUser(uId);
            if (!result) {
                return res.send('Usuario no encontrado');
            }
            return res.send(result);
        } catch (error) {
            console.log(error);
        }
    };

    getUserByEmail = async (req, res) => {
        const { email } = req.params;
        try {
            const result = await this.service.getUserEmail(email);
            if (!result) {
                return res.send('Usuario no encontrado');
            }
            return res.send(result);
        } catch (error) {
            console.log(error);
        }
    };

    updateUser = async (req, res) => {
        try {
            const uid = req.params.uid;
            const user = await this.service.getUser(uid);
            const {
                first_name,
                last_name,
                email,
                role
            } = req.body;

            if (!first_name || !last_name || !email) return res.send('Datos Incompletos');

            user.first_name = first_name;
            user.last_name = last_name;
            user.role = role;

            result = await this.service.updateUser(user._id, user);
            if (!result) return res.send('Usuario No Modificado');
            return res.send(result);

        } catch (error) {
            console.log(error);
        }
    }

    deleteUser = async (req, res) => {
        const user = req.params.id;
        try {
            await this.service.deleteUser(user);
            return res.redirect('/users');
        } catch (error) {
            return res.redirect('/users');
        }
    }
}

export default UserController;