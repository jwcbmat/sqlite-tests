import {Sqlite} from "../src/sqlite/sqlite"
import clearAllMocks = jest.clearAllMocks;

jest.mock("sqlite3")

let instance: Sqlite
describe("Sqlite tests", () => {

    beforeAll(() => {
        instance = Sqlite.getInstance()
    })

    afterAll(() => {
        Sqlite.closeDatabase()
        clearAllMocks()
    })

    it("sqlite Instance Singleton Test", () => {
        const instance2 = Sqlite.getInstance()

        expect(instance).toEqual(instance2)
    })

    it("", () => {
        instance.init()

        const db = instance.db
        const initDB = instance.init()
        expect(db).toEqual(initDB)
        expect(db.exec).toBeCalledTimes(1)
    })

    it("", () => {
        expect(instance.db.exec).toBeCalledTimes(1)

        const spyCreateTable = jest.spyOn(Sqlite, "createTable")
        expect(spyCreateTable).not.toThrow()
        // const spyDBExec = jest.spyOn(Sqlite.getInstance().db, "exec")
    })
})