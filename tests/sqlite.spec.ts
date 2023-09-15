const SQLITE_MODULE = require("../src/sqlite/sqlite")

jest.mock("sqlite3", () => {
	return {
		Sqlite: {
			getInstance: jest.fn(() => {
				return {
					db: {
						exec: jest.fn()
					},
					createTable: jest.fn(),
				}
			})
		},
	};
})

describe("Sqlite tests", () => {
	it("sqlite Instance Singleton Test", () => {
		const instance1 = SQLITE_MODULE.Sqlite.getInstance()
		const instance2 = SQLITE_MODULE.Sqlite.getInstance()
		
		expect(instance1).toEqual(instance2)
	})
	
	it("", () => {
		SQLITE_MODULE.Sqlite.getInstance().init()
	})
})