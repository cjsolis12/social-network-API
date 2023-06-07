const { Schema, model, mongo, default: mongoose } = require('mongoose');

//Schema to create thought model

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        minlength:[1, "Thought text must be at least 1 character long"],
        maxlength: [280, "Thought text"]
    }
}

)
