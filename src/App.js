import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
        {/* Hi There!  */}
        
      </Suspense>
    </>
  );
}

export default App;