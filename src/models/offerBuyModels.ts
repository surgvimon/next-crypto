import mongoose from "mongoose";

const offerBuySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    amount_total_pln: {
      type: Number,
      unique: true,
    },
    price: {
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
if (mongoose.models.offer_buys) {
  const offerBuyModels = mongoose.model("offer_buys");
  mongoose.deleteModel(offerBuyModels.modelName);
}

// create new model
const offerBuy = mongoose.model("offer_buys", offerBuySchema);
export default offerBuy;
