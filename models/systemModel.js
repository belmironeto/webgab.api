export default (mongoose) => {
  const BancoDados = mongoose.Schema({
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    type: {
      type: String,
      required: true,
      lowercase: true,
    },
    user: {
      type: String,
      required: true,
      upercase: true,
    },
  });

  const Environment = mongoose.Schema({
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    banco: {
      type: { BancoDados },
      required: false,
    },
    servers: {
      type: [String],
      required: false,
    },
  });
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    divisao: {
      type: String,
      required: true,
      lowercase: true,
    },
    url: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    environment: {
      type: [Environment],
      required: true,
    },
    tags: {
      type: [String],
      required: true,
      lowercase: true,
    },
  });

  const System = mongoose.model('systems', schema, 'systems');

  return System;
};
