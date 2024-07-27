import mongoose from 'mongoose';  

let MONGO_URI = process.env.MONGO_URI;

if(process.env.NODE_ENV==="development") {
    MONGO_URI = "mongodb://discordlelocal:discordlelocal@localhost:27017/"
}

const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};  
async function connectMongo() {  
    if (!MONGO_URI) {  
        throw new Error('Please define the MONGO_URI environment variable inside .env.local');  
    }  
    if (cached.connection) {  
        return cached.connection;  
    }  
    if (!cached.promise) {  
        const opts = {  
            bufferCommands: false,  
        };  
        cached.promise = mongoose.connect(MONGO_URI, opts);  
    }  
    try {  
        cached.connection = await cached.promise;  
    } catch (error) {  
        cached.promise = undefined;  
        throw error;  
    }  
    return cached.connection;  
}  
export default connectMongo;