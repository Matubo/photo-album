function request(id) {
  let result = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((result) => {
      if (result.length < 1) {
        new Error('Нет данных');
      }
      return { error: false, result: result };
    })
    .catch((e) => {
      console.log(e);
      return { error: true, result: null };
    });

  return result;
}

export default request;
