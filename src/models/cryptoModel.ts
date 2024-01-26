import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
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
