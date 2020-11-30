const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando incorrecto');
        break;

}