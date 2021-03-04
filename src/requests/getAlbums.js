function request(id) {
  let data = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  console.log(data);
  return data;
}
export default request;
