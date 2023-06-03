module.exports = {
  apps : [{
    name: 'Nodecluster',
    script: 'index.js',
    instances: 'MAX',
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env:{
      NODE_ENV: 'development'
    },
    env_production:{
      NODE_ENV: 'production'
    }
  }]
};
