import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "baopin.db");

declare global {
  // eslint-disable-next-line no-var
  var __baopinDb: Database.Database | undefined;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS candidates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT,
      price_yuan REAL,
      sales_signal TEXT CHECK (sales_signal IS NULL OR sales_signal IN ('weak', 'mid', 'strong')),
      competition_1to5 INTEGER CHECK (competition_1to5 IS NULL OR (competition_1to5 >= 1 AND competition_1to5 <= 5)),
      fulfillment_risk_note TEXT,
      margin_gut TEXT CHECK (margin_gut IS NULL OR margin_gut IN ('low', 'ok', 'good')),
      score_total REAL,
      score_breakdown_json TEXT,
      status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'reviewing', 'follow', 'skip', 'followed')),
      skip_reason TEXT,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime')),
      reviewed_at TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_candidates_created_at ON candidates(created_at DESC);
  `);
}

export function getDb(): Database.Database {
  if (globalThis.__baopinDb) {
    return globalThis.__baopinDb;
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  initSchema(db);
  globalThis.__baopinDb = db;
  return db;
}
