const help = (prefix) => {
	return `> *Comandos Sticker* <
comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converter imagem/gif/video para sticker
uso : responder imagem/gif/video, ou mande imagem/gif/video com comando\n
comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converter imagem para sticker removendo fundo
uso : responda image, ou mande imagem com comando\n
comando : *${prefix}image*
desc : converter sticker para imagem
uso : responder sticker\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converter texto para sticker
uso : *${prefix}tsticker texto aqui*\n
> *Outros Comandos* <
comando : *${prefix}tts*
desc : converter texto para fala/audio
uso : *${prefix}tts [cc] [text]*\nexemplo : *${prefix}tts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagem aleatoria de loli 
uso : apenas mande o comando\n
comando : *${prefix}nsfwloli*
desc : hentai de loli
uso : so envia o comando\n
comando : *${prefix}url2img*
desc : tira print da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem sera respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : procure anime com imagem [ Que Anime Seria/E ]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}prefixo*
desc : substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexemplo : *${prefix}setprefix ?*
nota : Este comando so pode ser usado pelo proprietario do bot\n
> *Comando De Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
nota : so pode ser usado quando o bot se torna admin, e quem envia o comando e admin!\n
comando : *${prefix}kick*
desc : dar ban em membros do grupo
uso : *${prefix}kick @tagmember*\n
nota : so pode ser usado quando o bot se torna admin, e quem envia o comando e admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
nota : so pode ser usado quando o bot se torna admin, e quem envia o comando e admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
nota : so pode ser usado quando o bot se torna admin, e quem envia o comando e admin!\n
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command
nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}leave*
desc : Fazer o bot sair do grupo
uso : apenas envie o comando
nota : So pode ser usado por administradores de grupo e proprietario do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores tambem
uso : apenas envie o comando
nota : Este comando pode ser usado se voce for um administrador do grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se voce for um administrador de grupo\n`
}

exports.help = help
