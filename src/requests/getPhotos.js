function request(id) {
  let result;
  if (Array.isArray(id)) {
    let urlList = id.map((id) => {
      return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    });
    result = Promise.all(urlList)
      .then((responses) => {
        return Promise.all(responses.map((result) => result.json()));
      })
      .then((result) => {
        if (result.length < 1) {
          new Error('Нет данных');
        }
        return { error: false, result: result };
      });
  } else {
    result = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.length < 1) {
          new Error('Нет данных');
        }
        return { error: false, result: result };
      });
  }
  result.catch((e) => {
    console.log(e);
    return { error: true, result: null };
  });

  return result;
}

export default request;
