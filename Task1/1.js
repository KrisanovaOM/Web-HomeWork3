// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

const degreeСelsius = Number.parseFloat(prompt("Введите температутру в градусах цельсия:")).toFixed(2);
const degreeFahrenheit = ((9 / 5) * degreeСelsius + 32).toFixed(2);
alert(`Градус Цельсия: ${degreeСelsius} соответсвует градусам Фаренгейта: ${degreeFahrenheit}`);