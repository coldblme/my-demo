# 找爆品（Slice A）

单人本地工具：结构化录入拼多多爆品候选，并按时间倒序列出。  
本切片只做「能增、能列表」；评分 / 跟·不跟 / Top-N 见后续切片。

## 技术栈

- Next.js（App Router）+ TypeScript + Tailwind CSS
- SQLite（`better-sqlite3`），数据库文件：`data/baopin.db`

## 运行（必须在本目录或用根目录转发脚本）

```bash
cd baopin-finder
npm install
npm run dev
```

或在仓库根目录：

```bash
npm run install:app
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

- `/` — 候选列表（最新在前）
- `/new` — 新建候选表单

### 打不开 `/new`？

1. 终端应出现 `Next.js` / `Local: http://localhost:3000`（不是 `webpack-dev-server`）。
2. 确认 cwd 是 `baopin-finder`，或根目录执行的是 `npm run dev`（已转发到本应用）。
3. 验证：`curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/new` 应返回 `200`。
4. 旧 React17 demo：`npm run legacy:start`，默认多在 **8080**，**没有** `/new`。

## 其他脚本

```bash
npm run build   # 生产构建
npm run start   # 生产启动（需先 build）
npm run lint    # ESLint
```

## 说明

- `data/*.db` 为本地数据，默认不提交到 Git。
- 仓库根目录旧 React17 demo 与本应用无关。
