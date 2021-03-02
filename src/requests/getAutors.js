function request() {
  let data = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  console.log(data);
  return data;
}
export default request;
