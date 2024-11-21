import './App.css';
import { Route, Routes } from "react-router-dom";
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/Home/HomePage';
import StoryPage from './pages/Story/StoryPage';
import GroupPage from './pages/Group/GroupPage';
import VideoPage from './pages/Video/VideoPage';
import ShopPage from './pages/Shop/ShopPage';
function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/stories" element={<StoryPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/shops" element={<ShopPage />} />
      </Route>
    
    {/* <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} /> */}

    {/* <Route path="*" element={<NotFoundPage />} /> */}
  </Routes>
  );
}

export default App;
