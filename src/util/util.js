//Função que retorna a messagem em formato UPPERCASE.
// const == a constante
const formatMessageUpperCase = (message) => {
	return message.toUpperCase();
}

//Declara que está deixando público o método para que outro js tenha acesso as funções declaradas.
export default {
 formatMessageUpperCase : formatMessageUpperCase
}
