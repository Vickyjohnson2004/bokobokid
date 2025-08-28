import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navigation } from "@/components/Navigation";
import Render from "./components/storyQuest/Render";
import MainSection from "./components/the_Village/mainsection";

const queryClient = new QueryClient();

// /story-quest   <Render />
// /the-Village   <MainSection />

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <Navigation /> */}
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/story-quest" element={<Render />} />
      <Route path="/the-Village" element={<MainSection />} /> the-Village
      <Route path="*" element={<NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
