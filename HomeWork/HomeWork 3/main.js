// Определение функции greeting
function greeting(name) {
    console.log(`Привет, ${name}!`);
  }
  
  // Запрос имени у пользователя
  var userName = prompt("Пожалуйста, введите ваше имя:");
  
  // Вызов функции greeting с полученным именем
  greeting(userName);