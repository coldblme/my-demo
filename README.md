# my-demo

## 找爆品（当前主应用）

应用在 **`baopin-finder/`**（Next.js），不要用仓库根目录的旧 React17 demo。

```bash
# 方式 A：进入应用目录（推荐）
cd baopin-finder
npm install
npm run dev

# 方式 B：在仓库根目录（会转发到 baopin-finder）
npm run install:app   # 首次
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

| 路径 | 页面 |
|------|------|
| `/` | 候选列表 |
| `/new` | 新建候选表单 |

若 `/new` 404 或看不到表单：确认终端日志是 **Next.js**（不是 webpack-dev-server），且是在 `baopin-finder` 下启动的。旧 demo 请用 `npm run legacy:start`（默认端口通常是 **8080**，没有 `/new` 路由）。

详见 [`baopin-finder/README.md`](./baopin-finder/README.md)。

---

## 旧 React demo（legacy）

根目录 `src/` + webpack 为历史 demo，与找爆品无关。
