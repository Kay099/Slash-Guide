

<h1>Guia para crear slash commands</h1>
                                                                                                                                                  


Hola si estas aqui es porque quieres aprender como hacer slash commands.




<h1>Para iniciar</h1>
                                           
                                                  

Nesecitamos [Node v16.x](https://nodejs.org/en/)

Lo primero es que tenemos que ir a nuestro escrito y crear una carpeta con el nombre que queramos

<img src='https://cdn.discordapp.com/attachments/884856330685407255/884856343104729128/unknown.png'></img>


Una vez que tenemos que haces es instalar unas [dependencias](./dependencias.txt) para poder hacer esto.

Ahora en nuestro archivo tenemos que crear 5 archivos: [

index.js

slashcommands.js

config.json

.env

interactionCreate

]

Y dos carpetas: [

    eventos

    slashcmd

] (si ya tienen las carpetas este te puedes pasar al siguiente paso)

En el index.js pondremos lo siguiente:

[Codigo](./codigos/index.js) del index.js

Una vez puesto esto no iremos al config.json y tendremos que poner los siguiente

[Codigo](./codigos/config.json) del config.json

Ahora tendremos que crear un archivo llamado interactionCreate y pondremos lo siguiente

[Codigo](./codigos/interactionCreate) del interactionCreate

En el .env tendremos que poner

```
TOKEN=[tutoken](https://discord.com/developers/applications) (se obtiene desde el portal de desarrolladores de dj)
```

Listo ahora podemos hacer los slash commands




<h1>Creando slash</h1>
                                        

                                                                                                       


Para crear un slash es nesesario tener la siguiente [estructua](./codigos/estructura.js)


En esta parte
```js
    async runs(cliento, interactiones){
        //code
        }
``` 
Iria el code

Y eso seria todo!

Si quieres saber mas te recomiendo ir a [la guia de djs en español](https://guia.palta.ml/interacciones/respondiendo-a-comandos-de-barra#opciones-de-comando)


Nota pa los [copypasters (los que usan ctrl + c ctrl + v)](./codigos/pa-cobipasters.txt)


Cualquier duda o sugerencia me puedes encontrar en los siguientes lugares:

[discord.gg/diurnos](https://dsc.gg/diurnos)

[discord.gg/justicierosjs](htt)