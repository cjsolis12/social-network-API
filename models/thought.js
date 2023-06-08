const { Schema, model, mongo, default: mongoose } = require("mongoose");

//Reaction Schema
const reactionSchema = new Schema({
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return new Date(timestamp).toLocaleString();
      },
    },
  });
//Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: [1, "Thought text must be at least 1 character long"],
      maxlength: [280, "Thought text cannot be longer than 280 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return new Date(timestamp).toLocaleString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


//Initialize and export though model with reaction subdocument

const Thought = model("Thought", thoughtSchema )
module.exports = Thought;

