import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [2, "Name Must Contain At Least 2 Characters!"],
  },
  
  subject: {
    type: String,
    minLength: [2, "Subject Must Contain At Least 2 Characters!"],
  },
  message: {
    type: String,
    minLength: [2, "Message Must Contain At Least 2 Characters!"],
  },
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  email:{
    type: String,
    required: true,

  },
  phoneNumber:{
    type:Number,
    required: true,
  },
  whatsAppNumber:{
  type:Number,
  required: true,
  }
  // here we can add sender email, sender phone number, sender whatsapp number 
});

export const Message = mongoose.model("Message", messageSchema);

// completed upto here
