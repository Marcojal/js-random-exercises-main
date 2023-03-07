export function getRandom (max = 11, min = 0) {
 //aquí validación de parámetros
 return Math.floor(Math.random() * (max - min)) + min;
}