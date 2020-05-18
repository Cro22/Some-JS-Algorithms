/**
 * @param {string} str
 * @return {string[]}
 */

function breakString(str) {
    let level = str.split('Nivel: ')
console.log(level)
    let area = level[1].split('Area de Estudio: ');
    level = area[0];
    area = area[1].split('Pais de estudio: ');
    let country = area[1];
    area = area[0];
    return [level, area, country]
}
function breakStringWork(str) {
    let level = str.split('Nivel de Experiencia: ')
    let area = level[1].split('Area de Empleo: ');
    level = area[0];
    area = area[1].split('Descripcion: ');
    let country = area[1];
    area = area[0];
    return [level, area, country]
}

console.log(breakStringWork('Nivel de Experiencia: 3 Area de Empleo: 2 Descripcion: zdfg'))