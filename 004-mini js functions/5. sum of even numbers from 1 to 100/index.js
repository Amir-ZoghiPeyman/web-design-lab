function sum() {
  let total = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      total = total + i;
    }
  }
  console.log(total);
}
