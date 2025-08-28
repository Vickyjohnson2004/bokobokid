import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navigation } from "@/components/Navigation";
import Render from "./components/storyQuest/Render";
import MainSection from "./components/the_Village/mainsection";
import About from "./components/about/about";

const queryClient = new QueryClient();

// Render

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <Navigation /> */}
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/story-quest" element={<MainSection />} />
      <Route path="/the-Village" element={<Render />} /> the-Village
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
