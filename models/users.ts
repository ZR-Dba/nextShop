import { Schema, model } from "mongoose";

const GroupSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    queryTemplateId: {
      type: Schema.Types.ObjectId,
      ref: "Query",
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
    limit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Group = model("User", GroupSchema);
