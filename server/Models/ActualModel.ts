import mongoose from "mongoose";
import IActual from "../Interfaces/ActualInterface";

const Schema = mongoose.Schema;

const ActualSchema = new Schema({
    id: { type: String, required: false },
    theme: { type: String, default: "Русский хип-хоп" },
    title: { type: String, default: "Oxxxymiron" },
    tweets: { type: Number, default: 0 }
})

export default mongoose.model<IActual>('Actual', ActualSchema, 'Actual');