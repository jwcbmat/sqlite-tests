import { Sqlite } from "./sqlite/sqlite.js"

// TODO: adicionar plantUML para diagrama do projeto
// TODO: construir testes com jest
// TODO: funções utils para logar informação e erro.
// TODO: construir emissor de evento para logar erros. *talvez*
// TODO: fazer documentação de funções e classes
// TODO: ponto de atenção para interfaces com métodos estáticos
// TODO: deletePerson(): Promise<void> {}
// TODO: deleteAllPersons()
// TODO: async selectPerson(): Promise<void> {}
// TODO: selectAllPersons()

/**
	* Initial service
 * **/
function initialApp(): Promise<void | Error> {
	return new Promise(async (resolve, reject) => {
		try {
			Sqlite.getInstance()
			Sqlite.createTable()

			Sqlite.insertData("juao1")
			console.log("DONE: insert data success")

		} catch (e) {
			reject(e)
		}

		// create database
		// create table person
		// insert data to person table
	})
}

initialApp()
	.then(response => {
		console.log("DONE: ", response)
	})
	.catch(err => {
		console.error("ERROR: ", err)
	})
	.finally(() => {
		Sqlite.closeDatabase()
	})
