//building authantication service

import config from "../confing/config.js";
import { Client, Account, ID } from "appwrite";

//create class for batter approach and best practesie's
export class AuthService {

  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount =  await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
        
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }



  async getCurrentUser() {
    try {
      return await this.account.get();
        
    } catch (error) {
        console.log("appwrite server error 404", error);
    }
    return null;
}

  async logout () {
    try {
        await this.account.deleteSession();
        
    } catch (error) {
        console.log(error)
        
    }
  }
}


const authService = new AuthService();

export default authService;




































