import mongoose from 'mongoose';
import { format, parse } from 'date-fns';

const messageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    channelId: {type: mongoose.Schema.Types.ObjectId, ref: "Channel", required: true },
    content: {type: String, require: true},
    created: {type: String}
});

messageSchema.pre('save', function (next) {
    if (this.created && typeof this.created === 'object') {
      this.created = format(this.created, 'dd-MM-yyyy');
    }
    next();
  });

  messageSchema.post('findOne', function (doc) {
    if (doc && doc.created) {
      doc.created = parse(doc.created, 'dd-MM-yyyy', new Date());
    }
  });

export default mongoose.model("Message", messageSchema);