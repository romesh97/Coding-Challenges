import { Suspense, lazy, ElementType, useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",

      children: [
        { element: <Navigate to="/home" replace />, index: true },
        {
          path: "home",
          children: [
            {
              element: <Navigate to="/home/file-upload" replace />,
              index: true,
            },
            { path: "file-upload", element: <Home /> },
            { path: "challenge-two", element: <ChallengeTwo /> },
          ],
        },
      ],
    },
  ]);
}

// Main
const Home = Loadable(
  lazy(() => import("../pages/human-resource/ChallengeOneInitial"))
);

const ChallengeTwo = Loadable(
  lazy(() => import("../pages/human-resource/ChallengeTwoInitial"))
);
