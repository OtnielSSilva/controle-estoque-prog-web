import React from "react";
import { ItemEstoque } from "../types";

interface ListaItemProps {
	listaItens: ItemEstoque[];
	handleDeItem: (id: number) => void;
}

const ListaItens: React.FC<ListaItemProps> = ({
	listaItens,
	handleDeItem,
}: ListaItemProps) => {
	return (
		<div className="max-w-2xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Lista de Itens do Estoque</h1>
			<ul className="space-y-4">
				{listaItens?.map((item) => (
					<li
						key={item.id}
						className="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
					>
						<div className="flex justify-between items-center">
							<div>
								<h2 className="text-2xl font-semibold text-gray-800">
									{item.nome}
								</h2>
								<p className="text-gray-600">Quantidade: {item.quantidade}</p>
								<p className="text-gray-600">
									Preço: R${item.preco.toFixed(2)}
								</p>
							</div>
							<button
								onClick={() => handleDeItem(item.id)}
								className="ml-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition duration-200"
							>
								&times;
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListaItens;
