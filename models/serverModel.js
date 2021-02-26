export default (mongoose) => {
  const Cpu = mongoose.Schema({
    core: {
      type: Number,
      required: true,
    },
    thread: {
      type: Number,
      required: true,
    },
  });

  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    ip: {
      type: [String],
      required: true,
      uppercase: true,
    },
    os: {
      type: String,
      required: true,
      uppercase: true,
    },
    memory: {
      type: Number,
      required: true,
      min: 0,
    },
    cpu: {
      type: Cpu,
      required: true,
    },
  });

  const Server = mongoose.model('servers', schema, 'servers');

  return Server;
};
