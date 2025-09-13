import "dotenv/config"
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async ()=>{
    try{
    await mongoose.connect(MONGO_URL)
        console.log('Conectado com o banco')
    }catch(error){
        console.log('Não conectou com o banco!', error)
    }
}




