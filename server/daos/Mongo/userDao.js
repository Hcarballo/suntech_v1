import { usermodel } from "../../models/user.models.js";

export default class UsersDao {
    constructor() {
        this.usermodel = usermodel;
    }

    getUsers = async () => {
        try {
            return await this.usermodel.find().lean();
        } catch (error) {
            console.log(error);
        }
    }

    createUser = async (user) => {
        try {
           return await this.usermodel.create(user);
        } catch (error) {
            console.log(error);
        }
    }

    getUserBy = async (uid) => {
        try {
            return await this.usermodel.findById(uid);
        } catch (error) {
            console.log(error);
        }
    }

    getUserByEmail = async (email) => {
        try {
            return await this.usermodel.findOne({email});
        } catch (error) {
            console.log(error);
        }
    }

    updateUser = async (user, userToUpdate) => {
        try {
            return await this.usermodel.findOneAndUpdate(user,userToUpdate);
           
        } catch (error) {
            console.log(error);
        }
    }

    deleteUser = async (user) => {
        try {
           return await this.usermodel.deleteOne(user);            
        } catch (error) {
            console.log(error);
        }
    }
}
