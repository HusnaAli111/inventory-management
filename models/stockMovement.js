const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  product: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Product'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['IN', 'OUT']
    },
//    we need the type to tell if the stock is :
// IN → stock is added
// OUT → stock is removed

    quantity:{
        type: Number
    },

    reason:{ 
        type:String
    }

}, {timestamps: true});

const StockMovement  = mongoose.model("StockMovement ", StockSchema);

module.exports = StockMovement ;