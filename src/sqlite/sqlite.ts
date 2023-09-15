import * as sqlite3 from "sqlite3"
import {Database} from "sqlite3"

type Person = { id: number, name: string }

class Sqlite {
	private db!: sqlite3.Database
	private static instance: Sqlite | null = null
	
	private constructor() {
		console.log("PROCESS: Starting Sqlite in-memory")
	}
	
	public static getInstance(): Sqlite {
		if (!Sqlite.instance) Sqlite.instance = new Sqlite()
		
		return Sqlite.instance
	}
	
	public init(): Database {
		if (!this.db) {
			this.db = new sqlite3.Database(":memory:", (err) => {
				if (err) {
					console.error(err.message)
					throw new Error(err.message)
				}
				
				console.log("DONE: connected to the in-memory SQlite database.")
			})
		}
		Sqlite.createTable()
		
		return this.db
	}
	
	public static closeDatabase(): void {
		this.getInstance().db.close((err) => {
			if (err) {
				console.error("Error: closeDatabase fail")
				throw new Error(err.message)
			}
			
			console.log("DONE: closeDatabase success")
		})
	}
	
	public static createTable(): void {
		this.getInstance().db.exec("CREATE TABLE PERSON (" +
			" id INTEGER PRIMARY KEY AUTOINCREMENT," +
			" name TEXT NOT NULL" +
			")",
			(err) => {
				if (err) {
					console.error("ERROR: createTable error")
					throw new Error(err.message)
				}
				
				console.log("DONE: createTable success")
			}
		)
	}
	
	public static insertPerson(name: string): void {
		const INSERT_PERSON = `INSERT INTO PERSON ('name')
                         values ('${name}')`
		
		this.getInstance().db.exec(INSERT_PERSON,
			(err) => {
				if (err) {
					console.error("ERROR: insert data error")
					throw new Error(err.message)
				}
				
				console.log("DONE: insert data success")
			}
		)
	}
	
	public static deletePerson(id: number): void {
		const DELETE_PERSON = `DELETE
                         FROM PERSON
                         WHERE id = '${id}'`
		
		this.getInstance().db.run(DELETE_PERSON, (err) => {
			if (err) {
				console.log("ERROR: deletePerson error")
				throw new Error(err.message)
			}
			
			console.log("DONE: deletePersonSuccess")
		})
	}
	
	public static deleteAll(): void {
		const DELETE_ALL = `DELETE
                      FROM PERSON`
		
		this.getInstance().db.run(DELETE_ALL, (err) => {
			if (err) {
				console.log("ERROR: deleteAll error")
				throw new Error(err.message)
			}
			
			console.log("DONE: deleteAll")
		})
	}
	
	public static selectPerson(name: string): Promise<string> {
		const SELECT_PERSON = `SELECT id, name
                         FROM PERSON
                         WHERE name = '${name}'`
		
		return new Promise((resolve, reject) => {
			this.getInstance().db.get(
				SELECT_PERSON, (err, row: Person) => {
					if (err) {
						console.log("ERROR: selectPerson error")
						reject(new Error(err.message))
					}
					
					resolve(row.name)
				})
		})
	}
	
	public static selectAll(): Promise<Person[]> {
		const SELECT_ALL = `SELECT id, name
                      FROM PERSON`
		
		return new Promise((resolve, reject) => {
			this.getInstance().db.all(SELECT_ALL, (err, row: Person[]) => {
				if (err) {
					console.error("ERROR: selectAll error")
					reject(new Error(err.message))
				}
				
				resolve(row)
			})
		})
	}
}

export {Sqlite}