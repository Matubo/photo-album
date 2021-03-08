function request(id) {
  let data;
  if (Array.isArray(id)) {
    let urlList = id.map((id) => {
      return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    });
    console.log(urlList);
    data = Promise.all(urlList)
      .then((responses) => {
        return Promise.all(responses.map((result) => result.json()));
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  } else {
    data = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  console.log(data);
  return data;
}

export default request;
