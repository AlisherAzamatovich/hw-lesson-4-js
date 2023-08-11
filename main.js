let fromCount = +prompt("Для определения диапазона введите номер (от-?) :")
let toCount = +prompt("Для определения диапазона введите номер (до-?) :")

function ranNumber(minNum, maxNum) {
  return number = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
}

function matematicBot(num1 = 5, num2 = 25) {
  let myArray = []
  for (n = 0; n < 2; n++) {
    myArray.push(ranNumber(num2, num1))
  }
  let answer = +prompt(`${myArray[0]} + ${myArray[1]} = ?`)
  let res = myArray[0] + myArray[1]
  if (answer == res) {
    return alert(`${myArray[0]} + ${myArray[1]} = ${myArray[0] + myArray[1]} Вaш ответ ${myArray[0] + myArray[1]} молодец`)
  } else {
    return alert(`${myArray[0]} + ${myArray[1]} = ${myArray[0] + myArray[1]} Вaш ответ ${answer} ошибка!`)
  }
}
for (i = 0; i < 2; i++) {
  matematicBot(fromCount, toCount)
}