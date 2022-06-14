function fn(foo) {
  if (!foo) {
    return "Bar";
  }
  return "Foo";
}
console.log(/*#__NOINLINE__*/fn(true));
