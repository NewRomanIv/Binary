const ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

ws.onopen = function (evt) {
  ws.send(JSON.stringify({ ticks: "R_100" }));
};

ws.onmessage = function (msg) {
  let data = JSON.parse(msg.data);
  console.log("ticks update: %o", data);
};
