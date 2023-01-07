function swapArrays(a, b) {
    let temp = new Array(a.length)
  for (i = 0; i < a.length; i++) {
    temp[i] = a[i]
    a[i] = b[i]
    b[i] = temp[i]
  }
  console.log(a);
  console.log(b);
}
a = [1, 2, 3];
b = [4, 5, 6];
swapArrays(a,b)