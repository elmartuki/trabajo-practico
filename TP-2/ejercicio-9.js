let numero = 500;

for (let i = 1; i <= numero; i++) {
  for (let j = 6; j < 7; j++) {
    if (i % 6 === 0) {
      console.log("------------");
    }
  }

  if (i % 4 === 0) {
    console.log(i, "Multiplo de 4");
  } else if (i % 9 === 0) {
    console.log(i, "Multiplo de 9");
  } else {
    console.log(i);
  }
}
