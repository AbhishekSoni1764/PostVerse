import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import { useState } from 'react';
import PostItemsProvider from './store/post-list-store';

function App() {
  const [tabSelected, setTabSelected] = useState("Home")

  return (
    <PostItemsProvider>
      <div className='main-container'>
        <Sidebar tabSelected={tabSelected} setTabSelected={setTabSelected} />
        <div className="right-container">
          <Navbar />
          {tabSelected === "Home" ? <PostList /> : <AddPost />}
          <Footer />
        </div>
      </div>
    </PostItemsProvider>
  )
}

export default App
