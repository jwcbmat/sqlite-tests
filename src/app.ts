import {Sqlite} from "./sqlite/sqlite"

// TODO: adicionar plantUML para diagrama do projeto
// TODO: construir testes com jest
// TODO: funções utils para logar informação e erro.
// TODO: construir emissor de evento para logar erros. *talvez*
// TODO: fazer documentação de funções e classes
// TODO: ponto de atenção para interfaces com métodos estáticos

console.log("PROCESS: starting service")

/**
	* Initial service
	* **/
function initialApp(): void {
	Sqlite.getInstance().init()
}

initialApp()
