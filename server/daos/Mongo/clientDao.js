import { clientModel } from "../../models/client.model.js";

export default class ClientDao {
    constructor() {
        this.clientModel = clientModel;
    }

    getClients = async () => {
        try {
            return await this.clientModel.find().lean();
        } catch (error) {
            console.log(error);
        }
    }

    createClient = async (user) => {
        try {
           return await this.clientModel.create(user);
        } catch (error) {
            console.log(error);
        }
    }

    getClientBy = async (uid) => {
        try {
            return await this.clientModel.findById(uid);
        } catch (error) {
            console.log(error);
        }
    }

    getClientByEmail = async (email) => {
        try {
            return await this.clientModel.findOne({email});
        } catch (error) {
            console.log(error);
        }
    }

    updateClient = async (client, clientToUpdate) => {
        try {
            return await this.clientModel.findOneAndUpdate(client,clientToUpdate);
           
        } catch (error) {
            console.log(error);
        }
    }

    deleteClient = async (client) => {
        try {
           return await this.clientModel.deleteOne(client);            
        } catch (error) {
            console.log(error);
        }
    }
}