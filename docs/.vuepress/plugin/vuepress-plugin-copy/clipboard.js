import ClipboardJS from "clipboard";

function setUpText(el, text = "") {
  return new Promise((resolve, reject) => {
    const cli = new ClipboardJS(el, {
      text() {
        return text;
      },
    });
    cli.on("success", function() {
      resolve(text);
      // 无论成功与否都删除
      cli.destroy();
    });

    cli.on("error", function(e) {
      reject(e.action);
      // 无论成功与否都删除
      cli.destroy();
    });
  });
}

export default setUpText;
