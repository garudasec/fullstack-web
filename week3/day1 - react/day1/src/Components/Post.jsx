import { useState, useEffect } from "react";

export default function Post() {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);

  const getdata = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const fetchandGetPost = async () => {
    try {
      setLoad(true);
      const data = await getdata(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPost(data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
      console.log(error);
    }
  };

  const handlePage = (val) => {
    const updatedPage = page + val;
    setPage(updatedPage);
  };

  useEffect(() => {
    fetchandGetPost();
  }, [page]);

  if (load) {
    return <h1>Loding.....</h1>;
  }

  if (err) {
    return <h1>Something went wrong.....</h1>;
  }
  return (
    <div>
      <h1>Welcome to Post application</h1>
      <hr />

      {post.map((el) => (
        <div
          style={{ border: "1px solid red", padding: "20px", margin: "20px" }}
        >
          <h3>User Id: {el.userId}</h3>
          <h4>User Id: {el.id}</h4>
          <p>Title: {el.title}</p>
          <h5>Body: {el.body}</h5>
          <button>More</button>
        </div>
      ))}

      <hr />

      <button onClick={() => handlePage(-1)}>Previous</button>
      <button>{page}</button>
      <button onClick={() => handlePage(1)}>Next</button>
    </div>
  );
}
