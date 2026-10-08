# 找爆品（Slice A）

单人本地工具：结构化录入拼多多爆品候选，并按时间倒序列出。  
本切片只做「能增、能列表」；评分 / 跟·不跟 / Top-N 见后续切片。

## 技术栈

- Next.js（App Router）+ TypeScript + Tailwind CSS
- SQLite（`better-sqlite3`），数据库文件：`data/baopin.db`

## 运行

在仓库根目录或本目录均可，推荐进入本目录：

```bash
cd baopin-finder
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

- `/` — 候选列表（最新在前）
- `/new` — 新建候选表单

## 其他脚本

```bash
npm run build   # 生产构建
npm run start   # 生产启动（需先 build）
npm run lint    # ESLint
```

## 说明

- `data/*.db` 为本地数据，默认不提交到 Git。
- 旧仓库根目录的 React17 demo 与本应用无关，请使用本目录。
