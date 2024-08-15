//* Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let userNumber = parseInt(prompt("Hi! Enter a number, please!"));
console.log(`Your number is: ${userNumber}`);
for(let i = 1; i <= 100; i++)
{
    if(i**2 < userNumber){
        console.log(i);
    }
}