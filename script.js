//Создаем общий контейнер
const main = document.createElement("main");
document.body.appendChild(main);
main.classList.add("main");

//Создаем заголовок
const h2 = document.createElement("h2");
h2.textContent = "Температура в разных городах";
h2.classList.add("h2");
main.appendChild(h2);

const cities = ["Санкт-Петербург", "Новосибирск", "Москва", "Кемерово"];
const temperature = [];

for (let i = 0; i < cities.length; i++) {
  let textTemper = prompt(`Введите температуру для города: ${cities[i]}`);
  temperature.push(Number(textTemper));
}

for (let i = 0; i < cities.length; i++) {
  const p = document.createElement("p");
  p.classList.add("p");
  p.textContent = `Температура в городе ${cities[i]}: ${temperature[i]}°C`;
  main.appendChild(p);
}

//Находим макс и мин температуры
let maxTemper = -100;
let minTemper = 100;

for (let i = 0; i < temperature.length; i++) {
  if (temperature[i] > maxTemper) {
    maxTemper = temperature[i];
  }

  if (temperature[i] < minTemper) {
    minTemper = temperature[i];
  }
}

//Выводим на экран макс и мин температуру
const textMaxTempr = document.createElement("p");
textMaxTempr.classList.add("max");
textMaxTempr.textContent = `Максимальная температура: ${maxTemper}°C`;
main.appendChild(textMaxTempr);

const textMinTemper = document.createElement("p");
textMinTemper.classList.add("min");
textMinTemper.textContent = `Минимальная температура: ${minTemper}°C`;
main.appendChild(textMinTemper);

/*Алгоритм действий

1.Создайте HTML-страницу, пусть на ней будет заголовок "Температура в разных городах"
2.Создайте массив городов, например cities
3.Создайте пустой массив, который будет хранить температуры для каждого 
города
4.Используя цикл, пройдитесь по массиву городов и попросите пользователя 
ввести температуру для каждого города, используя функцию prompt() или 
другие способы ввода данных пользователем
5.Создайте список, в котором будет отображаться информация о каждом городе 
и его температуре. Тут нужно будет использовать цикл для перебора элементов 
массивов, создать элементы и добавить их в список, указывая название города и 
соответствующую температуру.
6.Найдите максимальную и минимальную температуру из массива с температурами. 
Для этого создайте две переменные и инициализируйте их значениями, 
которые гарантированно будут больше и меньше любой возможной температуры 
соответственно.
7.Выведите информацию с погодой в разных городах, а также максимальной и 
минимальной температурой на экран

Подсказки:
Для преобразования строки в число используйте Number()
Свойство length возвращает количество элементов в массиве
Для взаимодействия с DOM вам понадобятся методы создания элементов, 
добавления в родительский элемент и установки текстового значения*/
