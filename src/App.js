import { useEffect, useState } from "react";
import { api } from "./api";
import Header from "./Components/Header";
import Post from "./Components/Post";
import { GlobalStyles } from "./Styles/GlobalStyles";

function App() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api("/posts").then((response) => setTotalPosts(response.data.length));
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const { data } = await api("/posts", {
          params: { userId: userId },
        });
        setPosts((posts) => [...posts, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [userId]);

  const scrollToEnd = () => {
    const viewHeight = window.innerHeight;
    const scrolled = document.documentElement.scrollTop;
    const total = document.documentElement.offsetHeight;
    const isFullScrolled = viewHeight + scrolled === total - 2;

    if (!loading && isFullScrolled && posts.length < totalPosts) {
      setUserId(userId + 1);
    }
  };

  window.onscroll = () => scrollToEnd();

  return (
    <div className="App">
      <GlobalStyles />
      <Header />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {loading && <p className="loading">Loading . . .</p>}
    </div>
  );
}

export default App;
