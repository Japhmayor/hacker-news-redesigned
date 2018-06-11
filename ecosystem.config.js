module.exports = {
  apps : [
    {
      name      : 'HNPWA',
      script    : 'start.prod.js',
      env: {
        NODE_ENV: 'production'
      }
    },
  ],
};
