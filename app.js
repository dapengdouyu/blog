const { exec } = require("child_process");
function execPromise(...args) {
  return new Promise((resolve, reject) => {
    exec(...args, function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}
(async () => {
  try {
    await execPromise("npm run dev");
  } catch (error) {
    console.error(error);
  }
})();
