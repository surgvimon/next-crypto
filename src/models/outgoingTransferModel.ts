import mongoose from "mongoose";

const outgoinTransSchema = new mongoose.Schema(
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
if (mongoose.models.out_transfer) {
  const outTransModel = mongoose.model("out_transfer");
  mongoose.deleteModel(outTransModel.modelName);
}

// create new model
const OutTransfer = mongoose.model("out_transfer", outgoinTransSchema);
export default OutTransfer;
