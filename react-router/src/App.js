import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostId />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

const posts = [
  { id: 1, title: "React", content: "React Tutorial" },
  { id: 2, title: "Vue", content: "Vue.js Tutorial" },
  { id: 3, title: "Laravel", content: "Laravel Tutorial" },
];

function Posts() {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostId() {
  const params = useParams();
  const id = Number(params.id);
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default App;
