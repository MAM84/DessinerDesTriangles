function drawRectTriangle(cote, symbole) {
    for (let i = 1; i <= cote; i++) {
        document.write(symbole.repeat(i) + "<br/>");
    }
}

function drawIsoTriangle(hauteur) {
    document.write("<pre>");
    for (let i = 0; i < hauteur; i++) {
        document.write(' '.repeat(hauteur - i) + '*'.repeat(i * 2 + 1) + "\n");
    }
    document.write("</pre>");
}


//pour que l'espace corresponde bien à un espace