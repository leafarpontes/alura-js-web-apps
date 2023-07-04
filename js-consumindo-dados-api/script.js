// .then
// let searchCep = fetch('https://viacep.com.br/ws/01001000/json/')
// 	.then(response => response.json())
// 	.then(response => {
// 		if (response.erro) {
// 			throw new Error("Este CEP não existe!");
// 		} else console.log(response);
// 	})
// 	.catch(error => console.log(error))
// 	.finally(response => console.log("Processamento concluído."));

// async await
async function getAddress(cep) {
	let errorMessage = document.getElementById('erro');
	errorMessage.innerHTML = "";

	const city = document.getElementById('cidade');
	const street = document.getElementById('endereco');
	const state = document.getElementById('estado');
	const neighbourhood = document.getElementById('bairro');

	try {
		let searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		searchCep = await searchCep.json();
		if (searchCep.erro) {
			throw new Error('Este CEP não existe!');
		}
		city.value = searchCep.localidade;
		street.value = searchCep.logradouro;
		state.value = searchCep.uf;
		neighbourhood.value = searchCep.bairro;

		console.log(searchCep);
		return searchCep;
	} catch (error) {
		errorMessage.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
		city.value = "";
		street.value = "";
		state.value = "";
		neighbourhood.value = "";
		console.log(error);
	}
}

// let ceps = ['01001000', '01001001'];
// let cepPromises = ceps.map(value => getAddress(value));
// Promise.all(cepPromises).then(response => console.log(response));

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => getAddress(cep.value));