// 1 (функция сортировки)
function getSortedArr(arr = [], sort) {
  if(arr.length === 0) {
    alert( 'Нечего сортировать :(');
    return;
  }

  switch (sort) {
    case "up":
      arr.sort((a, b) => {
        return a - b;
      });
      break;
    case "down":
      arr.sort((a, b) => {
        return b - a;
      });
      break;
    default:
      alert("Укажите режим сортировки('up' или 'down')");
      return;
  }

  return arr;
}

// const arr1 = [1, 4, 2, 90, 45];
// console.log(getSortedArr(arr1, "up"));
// console.log(getSortedArr(arr1, "down"));
// console.log(getSortedArr(arr1));
// console.log(getSortedArr());


// 2 (построить флаг)
const element = "O";
const space = ' ';
const vertic = 60;
const horiz = 80;

let string = document.createElement('div');

for (i = 0; i < vertic; i++) {
  let str = "";

  if(i == 0) {
    for (j = 0; j < horiz; j++) {
      str += element;
    }
    createString(str);
  } else if (i < 20) {
    str += element;
    for (j = 0; j < horiz - 2; ++j) {
      str += space;
    }
    str += element;
    createString(str);
  } else if (i >= 20 && i < 40) {
    for (j = 0; j < horiz; j++) {
      str += i % 2 ? (j % 2 ? space : element) : (j % 2 ? element : space);
    }
    createString(str);
  } else {
    for (j = 0; j < horiz; j++) {
      str += element;
    }
    createString(str);
  }
}

document.body.append(string);
document.body.style.cssText = 'margin:40px; line-height:4px';

function createString(str) {
  let preString = document.createElement('pre');

  preString.textContent = str;
  preString.style.cssText= 'margin:0; padding:0; font-size: 8px;';

  string.append(preString);
}