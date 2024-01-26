import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        unique: true,
    },
    amount_crypto: {
      type: String,
      unique: true,
      lowercase: true,
    },
    wallet_adress: {
        type: Number,
        unique: true,
      },
  },
  {
    timestamps: true,
  }
);

// delete old model
if (mongoose.models.cryptos) {
  const cryptoModel = mongoose.model("cryptos");
  mongoose.deleteModel(cryptoModel.modelName);
}

// create new model
const Crypto = mongoose.model("cryptos", cryptoSchema);
export default Crypto;
