import {Sqlite} from "../src/sqlite/sqlite"

describe("Sqlite tests", () => {
	it("sqlite Instance Singleton Test", () => {
		const instance1 = Sqlite.getInstance()
		const instance2 = Sqlite.getInstance()
		
		expect(instance1).toEqual(instance2)
	})
})