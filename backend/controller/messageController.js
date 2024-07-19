import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";


// sending message to admin
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message,email,phoneNumber,whatsAppNumber } = req.body;
  if (!senderName || !subject || !message || !email || !phoneNumber || !whatsAppNumber) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const data = await Message.create({ senderName, subject, message,email,phoneNumber,whatsAppNumber });
  res.status(201).json({
    success: true,
    message: "Message Sent",
    data,
  });
});


// deleting message
export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message Already Deleted!", 400));
  }
  await message.deleteOne();
  res.status(201).json({
    success: true,
    message: "Message Deleted",
  });
});
// getting messages
export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(201).json({
    success: true,
    messages,
  });
});

// completed here