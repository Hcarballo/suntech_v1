import {ClientService} from "../service/index.js"

class ClientsController {
    constructor() {
        this.service = ClientService;
    };

    getClients = async (req, res) => {
        try {
            const client = await this.service.getClients();
            if (client.length == 0) {
                return res.send('No hay clientes Registrados');
            }
            return res.send({ status: 'success', payload: client });
        } catch (error) {
            console.log(error);
        }
    };

    createClient = async (req, res) => {
        const {
            first_name,
            last_name,
            email,
            telefono,
        } = req.body;

        if (!first_name || !last_name || !email || !telefono) return res.send('Error');

        try {
            const newClient = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                telefono: telefono,
            }

            const result = await this.service.createClient(newClient);
            if (result) {
                return res.send({ status: 'success', message: 'cliente registrado' });
            }
            return res.status(401).send({ status: 'error', message: 'No se completo el Registro' });

        } catch (error) {
            console.log(error);
        }
    };

    getClientById = async (req, res) => {
        const { uId } = req.params;
        try {
            const result = await this.service.getClient(uId);
            if (!result) {
                return res.send('Cliente no encontrado');
            }
            return res.send(result);
        } catch (error) {
            console.log(error);
        }
    };

    getClientByEmail = async (req, res) => {
        const { email } = req.params;
        try {
            const result = await this.service.getClientEmail(email);
            if (!result) {
                return res.send('Cliente no encontrado');
            }
            return res.send(result);
        } catch (error) {
            console.log(error);
        }
    };

    updateClient = async (req, res) => {
        try {
            const uid = req.params.uid;
            const client = await this.service.getClient(uid);
            const {
                first_name,
                last_name,
                email,
                telefono
            } = req.body;

            if (!first_name || !last_name || !email || !telefono) return res.send('Datos Incompletos');

            client.first_name = first_name;
            client.last_name = last_name;
            client.email = email;
            client.telefono = telefono;

            result = await this.service.updateClient(client._id, client);
            if (!result) return res.send('Cliente No Modificado');
            return res.send(result);

        } catch (error) {
            console.log(error);
        }
    }

    deleteClient = async (req, res) => {
        const client = req.params.id;
        try {
            await this.service.deleteClient(client);
            return res.redirect('/clients');
        } catch (error) {
            return res.redirect('/clients');
        }
    }
}

export default ClientsController;