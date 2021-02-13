let drueda, grueda;
drueda = prompt('ingrese un valor del diametro:');
drueda = Number(drueda);
grueda = prompt('ingrese un valor del grosor;');
grueda = Number(grueda);
if (drueda > 1.4 && grueda < 0.4 || drueda <= 1.4 && drueda > 0.8 && grueda < 0.25) {
    alert('El grosor para esta rueda es inferior.')
}
if (drueda > 1.4) {
    alert('La rueda es para un vehículo grande.');
} else if (drueda <= 1.4 && drueda > 0.8) {
    alert('La rueda es para un vehículo mediano.');
} else {
    alert('La rueda es para un vehículo pequeño.');
}