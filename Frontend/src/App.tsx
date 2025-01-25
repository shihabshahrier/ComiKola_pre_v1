import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Register } from './pages/auth/register';
import { Login } from './pages/auth/login';
import { Profile } from './pages/profile';
import { EditProfile } from './pages/edit-profile';
import { Comics } from './pages/comics';
import { ComicDetails } from './pages/comic-details';
import { UploadComic } from './pages/upload-comic';
import { AuthGuard } from './components/auth-guard'; // Import AuthGuard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="comics" element={<Comics />} />
          <Route path="comics/:id" element={<ComicDetails />} />

          {/* Protected Routes */}
          <Route
            path="profile"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
          <Route
            path="edit-profile"
            element={
              <AuthGuard>
                <EditProfile />
              </AuthGuard>
            }
          />
          <Route
            path="upload"
            element={
              <AuthGuard>
                <UploadComic />
              </AuthGuard>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
