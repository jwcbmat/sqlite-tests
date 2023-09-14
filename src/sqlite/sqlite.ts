import { Isqlite } from "./sqlite.interface.js"
import * as sqlite3 from "sqlite3"
import { Database } from "sqlite3"

class Sqlite implements Isqlite  {
	private static db: sqlite3.Database

	public static getInstance(): Database {
		if(!Sqlite.db) {
			Sqlite.db = new sqlite3.Database(":memory:", (err) => {
				if (err) return console.error(err.message)
				console.log("DONE: Connected to the in-memory SQlite database.")
			})
		}

		return Sqlite.db
	}

	public static closeDatabase(): void {
		Sqlite.db.close((err) => {
			if (err) console.error(err.message)
			console.log("DONE: Close the database connection.")
		})
	}

	public static createTable(): void {
		this.getInstance().exec("CREATE TABLE PERSON (" +
			" id INTEGER PRIMARY KEY AUTOINCREMENT," +
			" name TEXT NOT NULL" +
			")",
			(err) => {
				if(err) {
					console.error("ERROR: create table error")
					throw new Error(err.message)
				}
			}
		)
	}

	public static insertData(name: string): void {
		this.getInstance().exec(`INSERT INTO PERSON ('name') values ('${name}')`,
			(err) => {
				if(err) {
					console.error("ERROR: insert data error")
					throw new Error(err.message)
				}
			}
		)
	}
	async deleteData(): Promise<void> {}
	async selectData(): Promise<void> {}
}

export { Sqlite }