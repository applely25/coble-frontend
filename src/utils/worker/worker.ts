const clients: MessagePort[] = [];

onmessage = function (e: MessageEvent) {
  const port = e.ports[0];
  clients.push(port);

  port.onmessage = function (event: MessageEvent) {
    console.log('Worker received:', event.data);

    // 변경된 데이터를 다른 모든 클라이언트에 전송
    clients.forEach((client) => {
      if (client !== port) {
        client.postMessage(event.data);
      }
    });
  };

  port.start();
};
