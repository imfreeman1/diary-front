const interactConfig = {
  resizable: (callback) => ({
    edges: {
      top: false,
      left: false,
      bottom: true,
      right: true,
    },
    // invert: 'reposition',
    listeners: {
      move: (event) => callback(event),
    },
  }),
};

export default interactConfig;
