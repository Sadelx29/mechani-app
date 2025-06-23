import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseAsync("mechanic.db");

export function initDatabase() {
  (db as any).transaction((tx: any) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT,
        email TEXT,
        isSynced INTEGER DEFAULT 0
      );
    `);
  });
}


export default db;