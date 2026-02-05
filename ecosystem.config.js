
module.exports = {
  apps: [
    { 
        name: "online-ticket-sales",
        script: "node_modules\\next\\dist\\bin\\next",
        args: "start -p 3000",
        cwd: "C:\\inetpub\\wwwroot\\online-ticket-sales",
        env: {
            NODE_ENV: "production"
        }
    }
  ]
}