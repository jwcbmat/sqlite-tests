export interface Isqlite {
	// createTable: () => Promise<void>;
	// insertData: (name: string) => Promise<void>;
	deleteData: () => Promise<void>;
	selectData: () => Promise<void>;
}

