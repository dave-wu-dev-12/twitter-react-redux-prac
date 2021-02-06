import "./App.css";
import LeftHandNav from "./left-hand-nav/LeftHandNav";
import PostSection from "./postsSection/PostSection";

function App() {
  return (
    <div className="App">
      {/* left hand fixed nav */}
      <LeftHandNav />

      {/* center posts */}
      <PostSection />

      {/* right hand news */}
    </div>
  );
}

export default App;
