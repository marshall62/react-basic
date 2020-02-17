const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  let host_url = process.env.REACT_APP_BACKEND_URI;
  console.log("Host for backend is ", host_url);
  app.use(
    proxy(["/api"], { target: host_url, changeOrigin: true })
  );
};
