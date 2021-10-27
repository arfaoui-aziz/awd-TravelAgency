const Eureka = require("eureka-js-client").Eureka;

// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: "booking-service",
    hostName: "localhost",
    ipAddr: "127.0.0.1",
    port: {
      $: 3007,
      "@enabled": true,
    },
    vipAddress: "jq.test.something.com",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    // eureka server host / port
    host: "127.0.0.1",
    port: 8761,
    servicePath: "/eureka/apps/",
  },
});
client.start();
