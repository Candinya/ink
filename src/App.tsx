import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Welcome from "@/sections/Welcome";
import About from "@/sections/About";
import World from "@/sections/World";
import Footer from "@/sections/Footer";
import Player from "@/sections/Player";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 没必要在浏览时更新，毕竟也就刷新一下页面的事，更新了可能导致动画出现错乱（新增的元素对于 container 是 in view 且仅触发 once 的动画来说不会显示，就会多一块空白）
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background">
        {/*播放器*/}
        <Player />

        {/*引入*/}
        <Welcome />

        {/*自我介绍*/}
        <About />

        {/*我的世界*/}
        <World />

        {/*页脚*/}
        <Footer />

        {/*特效*/}
      </div>
    </QueryClientProvider>
  );
}

export default App;
