module.exports = {
  apps : [{
    name   : "nodejs-canvas",
    script : "./bin/www",
    // cron_restart: '* * * * *',
    // Specify which folder to watch
    watch: ["routes", "views"],
    // // Specify delay between watch interval
    // watch_delay: 1000,
    // // Specify which folder to ignore 
    ignore_watch : ["node_modules"],
    shutdown_with_message: true,
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
        NODE_ENV: "development"
    }
  }]
}
