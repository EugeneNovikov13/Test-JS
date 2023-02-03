let fs = require('fs');

let fileContent = fs.readFileSync('1.txt', 'utf8');
console.log(fileContent);

str = fileContent.split('').reverse().join('');

console.log(str);

fs.writeFile('2.txt', str, function(error){
   if(error) throw error;
   console.log('Данные успешно записаны записать файл');
});


const os = require('os');

let oS = os.type();
console.log('Operating system is ' + oS)