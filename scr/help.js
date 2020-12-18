const help = () => {
	return '> ```comandos sticker``` <\n' +
	'comando : *#sticker* ou *#figurinha*\n' +
	'desc : converter imagem/gif/video para sticker\n' +
	'uso : responder imagem/gif/video, ou mandar imagem/gif/video com comando\n\n' + 
	'comando : *#image*\n' +
	'desc : converter sticker para imagem\n' +
	'uso : responder sticker\n\n' +
	'comando : *#tsticker* ou *#tstiker*\n' +
	'desc : converter texto para sticker\n' +
	'uso : *#tsticker texto aqui*\n\n' +
	'> ```Comando Texto para Fala``` <\n' +
	'comando : *#tts*\n' +
	'desc : converter texto para fala/audio\n' +
	'uso : *#tts [cc] [texto]*\nexemplo : *#tts ja On2-chan*'+
	'comando : *#ttshelp* para ver as línguas disponíveis\n' 
}

exports.help = help
