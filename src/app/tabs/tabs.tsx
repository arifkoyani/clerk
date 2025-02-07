"use client";

import { Tabs } from "../ui/tabs";
import TabA from "./tabs/one";
import TabB from "./tabs/TabB";
import TabC from "./tabs/TabC";
import TabD from "./tabs/TabD"
import TabE from "./tabs/TabE";

export function TabsDemo() {
  const tabs = [
    {
      title: "TABA",
      value: "product",
      content: (
        <div className="w-full overflow-hidden  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Welcome TabA</p>
          <TabA />
        </div>
      ),
    },
    {
      title: "TabB",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tab-B</p>
          <TabB/>
        </div>
      ),
    },
    {
      title: "TABC",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>TABC</p>
          <TabC />
        </div>
      ),
    },
    {
      title: "TABD",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content TABD</p>
          <TabD />
        </div>
      ),
    },
    {
      title: "TabE",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <TabE />
        </div>
      ),
    },
  ];

  return (
    <div className="h-full  py-4 mb-16 bg-black/50 md:h-[40rem] [perspective:1000px] relative b flex flex-col px-2 mx-auto w-full  items-start justify-center ">
      <Tabs tabs={tabs} />
    </div>
  );
}
