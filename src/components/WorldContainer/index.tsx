import type { PropsWithChildren } from "react";

interface WorldContainerProps extends PropsWithChildren {
  title: string;
}
const WorldContainer = ({ title, children }: WorldContainerProps) => (
  <div className="mt-32 mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
      <h3 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default WorldContainer;
