import { useEffect, useState } from "react";
import { ItemEstoque } from "./types";
import FormularioAdicionarItem from "./components/FormularioAdicionarItem";
import ListaItens from "./components/ListaItens";
import estoqueData from "./data/estoque.json";

const App: React.FC = () => {
	const [itens, setItens] = useState<ItemEstoque[]>([]);

	useEffect(() => {
		setItens(estoqueData.itens);
	}, []);

	const adicionarItem = (item: ItemEstoque) => {
		setItens([...itens, item]);
	};

	const deletaItem = (id: number) => {
		setItens(itens.filter((item) => item.id !== id));
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Controle de Estoque
			</h1>
			<FormularioAdicionarItem adicionarItem={adicionarItem} />
			<ListaItens listaItens={itens} handleDeItem={deletaItem} />
		</div>
	);
};

export default App;
