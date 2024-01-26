import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        user_buy_id: {
        type: String,
        required: true,
        },
        user_sell_id: {
        type: String,
        unique: true,
        },
        amount_pln: {
            type: String,
            unique: true,
        },
        amount_btc: {
            type: String,
            unique: true,
          },
    },
    {
        timestamps: true,
    }
);

// delete old model
if (mongoose.models.transactions) {
  const transactionModel = mongoose.model("transactions");
  mongoose.deleteModel(transactionModel.modelName);
}

// create new model
const Transactions = mongoose.model("transactions", transactionSchema);
export default Transactions;
