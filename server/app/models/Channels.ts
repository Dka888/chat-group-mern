import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true  },
  description: {type: String, required: true, unique: true},
});

export default mongoose.model("Channel", channelSchema);