import mongoose from 'mongoose';

export const connectMongo = async () => {
    console.log('[mongodb]: connecting to mongodb')
    mongoose.connect(`${process.env.ATLAS_URI}`)
};
