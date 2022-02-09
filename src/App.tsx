import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MyLayout = lazy(() => import("pages/Layout"));
const NoMatch = lazy(() => import("pages/NoMatch"));
const SolitaireRulePage = lazy(() => import("pages/SolitaireRuleList"));
const SolitairePage = lazy(() => import("pages/SolitaireList"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={null}>
            <MyLayout />
          </Suspense>
        }
      >
        <Route index element={<Navigate to="/solitairerulelist" />} />
        <Route
          path="solitairerulelist"
          element={
            <Suspense fallback={null}>
              <SolitaireRulePage />
            </Suspense>
          }
        />
        <Route
          path="solitairelist"
          element={
            <Suspense fallback={null}>
              <SolitairePage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={null}>
            <NoMatch />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
