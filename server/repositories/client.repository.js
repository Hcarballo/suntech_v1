//import { sendEmail } from "../utils/sendEmail.js";

export default class ClientRepository {
    constructor(ClientDao) {
        this.ClientDao = ClientDao;
    }

    getClients = async () => await this.ClientDao.getClients();

    getClient = async filter => await this.ClientDao.getClientBy(filter);

    getClientEmail = async email => await this.ClientDao.getClientrByEmail(email);

    createClient = async (client) => {
        const result = await this.ClientDao.createClient(client);
        return (result);
    }

    updateClient = async (client, clientToUpdate) => {
        const result = await this.ClientDao.updateClient(client, clientToUpdate);
        return (result);
    }

    deleteClient = async uid => await this.ClientDao.deleteClient(uid);
}