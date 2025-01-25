import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout'; // Ensure Layout is imported
import { Home } from './pages/home';
import { Register } from './pages/auth/register';
import { Login } from './pages/auth/login';
import { Profile } from './pages/profile';
import { EditProfile } from './pages/edit-profile'; // Import EditProfile
import { Comics } from './pages/comics';
import { ComicDetails } from './pages/comic-details';
import { UploadComic } from './pages/upload-comic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} /> {/* Add this line */}
          <Route path="comics" element={<Comics />} />
          <Route path="comics/:id" element={<ComicDetails />} />
          <Route path="upload" element={<UploadComic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;