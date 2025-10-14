function questao01() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let z = parseInt(document.getElementById("z").value);
    let media = parseInt(document.getElementById("media").value);
    let resultado = document.getElementById("resultado01");

    switch (media) {
        case 1:
            resultado.textContent = ((x + y + z) / 3).toFixed(2);
            break;
        case 2:
            resultado.textContent = Math.cbrt(x * y * z);
            break;
            case 3:
            resultado.textContent = (x*2 + y*3 + z*5)/10;
            break;
        default:
            resultado.textContent = "Opção Inválida!";
    }
}