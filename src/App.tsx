import { Route, Routes } from "react-router-dom";
import {
  FiBarChart,
  FiList,
  FiBookmark,
  FiCalendar,
  FiInbox,
  FiPercent,
  FiBox,
  FiBook,
} from "react-icons/fi";

import * as S from "./App.styled";

import { useAuth } from "./providers/auth";

import Dashboard from "./pages/dashboard";
import Account from "./pages/account";
import NotFound from "./pages/404";

import RequireAuth from "./components/navigation/RequireAuth";
import MainNav from "./components/navigation/MainNav/MainNav";
import FloatingButton from "./components/chatbot/FloatingButton";
import RecipePage from "./pages/recipe/RecipePage";
import DealPage from "./pages/deals/Deals";

import MainNavMobile from "./components/navigation/MainNav/MainNavMobile";
import RecipesPage from "./pages/Recipes";
import SettingsPage from "./pages/Settings";

const MAIN_NAV_SECTIONS = [
  {
    title: "Menu",
    items: [
      { to: "/", label: "Discover", leading: <FiBarChart /> },
      { to: "/recipes", label: "Recipes", leading: <FiList /> },
      { to: "/deals", label: "Local Deals", leading: <FiPercent /> },
      { to: "/masher", label: "The Masher", leading: <FiBox /> },
    ],
  },
  {
    title: "Just for you",
    requiresAuth: true,
    items: [
      { to: "/bookmarks", label: "Bookmarks", leading: <FiBookmark /> },
      { to: "/calendar", label: "Calendar", leading: <FiCalendar /> },
      { to: "/list", label: "Shopping List", leading: <FiBook /> },
      { to: "/messages", label: "Messages", leading: <FiInbox /> },
    ],
  },
];

function App() {
  const { loading } = useAuth();

  // Not a good way of doing this but I absolutely do not care.
  if (loading) {
    return null;
  }

  return (
    <S.App>
      <FloatingButton />
      <MainNav sections={MAIN_NAV_SECTIONS} />
      <MainNavMobile sections={MAIN_NAV_SECTIONS} />
      <S.Pages>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/deals" element={<DealPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
            path="/me"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.Pages>
    </S.App>
  );
}

export default App;
