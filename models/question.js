"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    optionA: {
      type: String,
      required: true
    },
    optionB: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["heart", "football", "gun", "wrench", "dollar"],
      required: true
    },
    authorID: {
      type: String,
      required:true
    },
    answers:
      [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Answer'
        }
      ]

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Question", schema);
