function fibonacci(n) {
  console.log(n);
  while (n < 100) {
    n += n;
    fibonacci(n);
  }
}

fibonacci(1);
