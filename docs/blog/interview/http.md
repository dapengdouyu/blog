# 4. 浏览器的本地存储(1)的 cookie 了解多少

- cookie 在每次请求的时候都会自动的被携带在 `http header` 中
- cookie 可以在同一个域名下存储 2k 的数据

参考答案：

- 因为 `http` 是无状态的,`cookie` 是为了解决这一问题诞生的
- `cookie` 在每次请求的时候都会自动的被携带在 `http header` 中
- 每个特定的`域名`下最多生成`20` 个 `cookie`
- 每个 `cookie` 的长度最大为`4k`
- js 可以使用 document.cookie 属性来创建、读取、删除 cookie
- 删除 cookie 就是设置 expires 参数为以前时间即可，或是 Max-age 设置为-1
- 如果 cookie 设置了 HttpOnly 属性，那么通过 js 脚本将无法读取到 cookie 信息，可以有效防止 xss 攻击
- 安全性问题。如果 `cookie` 被人拦截了，那人就可以取得所有的 `session` 信息。即使加密也于事无补，因为拦截者不需要知道 `cookie`的意义，它只需要原样转发 `cookie`就可以达到目的
