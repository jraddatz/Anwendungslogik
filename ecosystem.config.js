module.exports = {
  apps: [{
    name: 'ludo',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-110-87.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ludo.pem',
      ref: 'origin/master',
      repo: 'git@github.com:SoftwareprojektGR4/Anwendungslogik.git',
      path: '/home/ubuntu/nodejs',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
