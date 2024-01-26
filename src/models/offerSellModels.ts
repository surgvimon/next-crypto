import mongoose from "mongoose";

const offerSellSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    amount_pln: {
      type: Number,
      unique: true,
    },
    account_no: {
        type: Number,
        unique: true,
    },
    status: {
        type: String,
        unique: true,
    },
  
  },
  {
    timestamps: true,
  }
);

// delete old model
if (mongoose.models.offer_sell) {
  const offerSellModels = mongoose.model("offer_sell");
  mongoose.deleteModel(offerSellModels.modelName);
}

// create new model
const offerSell = mongoose.model("offer_sell", offerSellSchema);
export default offerSell;
