import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-n4bqdae-shard-00-00.bjj77p3.mongodb.net:27017,ac-n4bqdae-shard-00-01.bjj77p3.mongodb.net:27017,ac-n4bqdae-shard-00-02.bjj77p3.mongodb.net:27017/?ssl=true&replicaSet=atlas-813vgp-shard-0&authSource=admin&retryWrites=true&w=majority`;


    try {
        await mongoose.connect(URL, { useUnifiedTopology:true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);

    }
}

export default Connection;