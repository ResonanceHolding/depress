(client, callback) => {
  //callback({ gs: Object.keys(gs) });
  gs.connection.select({
    category: 'test',
  }).fetch((err, result) => {
    if (err) {
      callback({ error: err.message, keys: Object.keys(gs) });
      return;
    }
    callback({ result });
  });
}
