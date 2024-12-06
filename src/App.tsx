import Welcome from "@/sections/Welcome";
import About from "@/sections/About";
import World from "@/sections/World";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background">
        {/*引入*/}
        <Welcome />

        {/*自我介绍*/}
        <About />

        {/*我的世界*/}
        <World />

        {/*来找我玩*/}

        {/*页脚*/}

        {/*播放器*/}

        {/*特效*/}
      </div>
    </QueryClientProvider>
  );
}

export default App;
