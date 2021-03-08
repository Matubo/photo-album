function request(id) {
  let data = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((e) => {
      console.log(e);
    });

  return data;
}

export default request;
