module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "127.0.0.1",
    port: 8545
  },
  networks: {
    "test": {
      network_id: 2,
      gas: 4712388
    }
  }
};