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
	try {
		let searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		searchCep = await searchCep.json();
		if (searchCep.erro) {
			throw new Error('Este CEP não existe!');
		}
		console.log(searchCep);
		return searchCep;
	} catch (error) {
		console.log(error);
	}
}

let ceps = ['01001000', '01001001'];
let cepPromises = ceps.map(value => getAddress(value));
Promise.all(cepPromises).then(response => console.log(response));
