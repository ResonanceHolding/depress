application.cloud.once('cloudWorkerHello', data => {
  test.strictSame(data, { answer: 42 });
  test.end();
});

api.jstpTest.connect(test.cbFail((conn, app) => {
  app.interfaceName.cloudEmitEvent(test.cb());
}));
