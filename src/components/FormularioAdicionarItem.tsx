import React, { ChangeEvent, FormEvent, useState } from "react";
import { ItemEstoque } from "../types";

interface FormularioProps {
	adicionarItem: (item: ItemEstoque) => void;
}

const FormularioAdicionarItem: React.FC<FormularioProps> = ({
	adicionarItem,
}: FormularioProps) => {
	const [novoItem, setNovoItem] = useState<ItemEstoque>({
		id: 0,
		nome: "",
		quantidade: 0,
		preco: 0,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNovoItem((prevItem) => ({
			...prevItem,
			[name]:
				name === "quantidade" || name === "preco" ? parseFloat(value) : value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		adicionarItem({ ...novoItem, id: Math.random() });
		setNovoItem({ id: 0, nome: "", quantidade: 0, preco: 0 });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
		>
			<label>Nome:</label>
			<input
				type="text"
				name="nome"
				value={novoItem.nome}
				onChange={handleChange}
				className="mt-1 p-2 w-full border rounded-md mb-4"
			/>
			<label>Quantidade:</label>
			<input
				type="number"
				name="quantidade"
				value={novoItem.quantidade}
				onChange={handleChange}
				className="mt-1 p-2 w-full border rounded-md mb-4"
			/>
			<label>Preço:</label>
			<input
				type="number"
				name="preco"
				value={novoItem.preco}
				onChange={handleChange}
				className="mt-1 p-2 w-full border rounded-md mb-4"
			/>
			<button
				type="submit"
				className="mt-4 p-2 bg-blue-500 text-white rounded-md"
			>
				Adicionar Item
			</button>
		</form>
	);
};

export default FormularioAdicionarItem;
