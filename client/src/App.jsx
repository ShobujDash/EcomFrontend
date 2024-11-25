import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainContainer from "./components/home/MainContainer";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import SignUp from "./components/user/SignUp";
import ProtectedRoutes from "./services/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <div className="w-screen h-screen flex flex-col bg-primary">
          <Routes>
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <main className="mt-14 md:mt-20 md:px-16 bg-primary px-8 py-4 w-full">
                      <MainContainer />
                    </main>
                    <Footer />
                  </>
                }
              />
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <ToastContainer />
      </AnimatePresence>
    </Provider>
  );
}

export default App;
