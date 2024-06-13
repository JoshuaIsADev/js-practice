const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

///Chapter 2 excercise////
/*

const numberOfRows = 7;
const character = '#';
let rows = [];

for (i = 0; i < numberOfRows; i++) {
  rows.push(character.repeat(i + 1));
}

console.log(rows);
let result = '';

for (const row of rows) {
  result = result + '\n' + row;
}

console.log(result);
*/
////////////////////////////////

let numberArray = [];

for (i = 1; i <= 100; i++) {
  numberArray.push(i);
}

let result = [];

for (const number of numberArray) {
  if (number % 3 == 0 && number % 5 == 0) {
    result.push('fizzbuzz');
  } else if (number % 5 == 0) {
    result.push('buzz');
  } else if (number % 3 == 0) {
    result.push('fizz');
  } else {
    result.push(number);
  }
}

console.log(result);

let patternRows = [];
const size = 18;
let xy = size * size;

for (i = 1; i < xy; i++) {
  if (i % (size + 1) == 0) {
    patternRows.push('\n');
  } else if (i % 2 == 0) {
    patternRows.push('#');
  } else {
    patternRows.push(' ');
  }
}
console.log(patternRows.join(''));

/*
let counter = 0;
let counter2 = 0;
let column = 2;
let row = 4;
let startsWithHash = '';
let startsWithSpace = '';
let rowResult = '';

while (counter < column) {
  counter = counter + 1;
  startsWithHash = startsWithHash + '# ';
  startsWithSpace = startsWithSpace + ' #';
}
console.log(startsWithHash);

while (counter2 < row) {
  counter2 = counter2 + 1;
  if (counter2 % 2 == 0) {
    rowResult = rowResult + startsWithHash + '\n\n';
  } else {
    rowResult = rowResult + startsWithSpace + '\n\n';
  }
}
console.log(rowResult);
*/

///Chapter 3 excercise////
/*
function minimum(val1, val2) {
  const min = Math.min(val1, val2);
  return min;
}

console.log(minimum(12, 42));

function isEven(param) {
  if (param % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(50));

function countBs(arg, char) {
  // return arg.length;
  let counter = 0;
  let numberOf = 0;
  while (counter < arg.length) {
    if (arg[counter] == char) {
      numberOf = numberOf + 1;
    }
    counter = counter + 1;
  }
  return numberOf;
}

console.log(countBs('houseBasketB', 'B'));
*/

///chapter 4////
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

remember('Brush teeth');
console.log(todoList);
remember('take our garbage');
console.log(todoList);
remember('write code');
console.log(todoList);

getTask();
console.log(todoList);

rememberUrgently('pay bills');
console.log(todoList);

console.log(['cat', 'dog', 'mouse', 'bird', 'dog'].indexOf('dog'));
console.log(['cat', 'dog', 'mouse', 'bird', 'dog'].lastIndexOf('dog'));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray);
console.log(array1);
let joinedArray = newArray.join(' ');
console.log(joinedArray);

console.log(String(6).padStart(3, '00'));

let sentence = 'Secretarybirds specialize in stomping';
let words = sentence.split('c');
console.log(words);

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
let numbers = [5, 3, 1, 7];
console.log(max(...numbers));
