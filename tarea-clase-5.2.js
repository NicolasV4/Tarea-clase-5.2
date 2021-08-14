const $aceptar = document.querySelector('#aceptar');

$aceptar.onclick = function (){
    const $nombreUsuario = document.querySelector('#nombre-usuario').value
    const $apellidoUsuario = document.querySelector('#apellido-usuario').value
    const $edadUsuario = Number(document.querySelector('#edad-usuario').value)

    document.querySelector('#saludo').innerText = 'Bienvenido ' + $nombreUsuario + '!';
    document.querySelector('#informacion-usuario').value = `Tu nombres es ${$nombreUsuario} ${$apellidoUsuario} y tenes ${$edadUsuario} años`
    return false;
}



