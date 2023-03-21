import { NextPage } from "next";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";

import { GatheringDisclosureProps } from "@/components/MapSideBar/SidebarDisclosure/GatheringDisclosure/GatheringDisclosure.props";

export const GatheringDisclosure: NextPage<GatheringDisclosureProps> = ({
  gatheringData,
  changeGatheringMaterialVisibility,
  isGatheringMaterialHidden,
  title,
}) => {
  return (
    <Disclosure>
      <Disclosure.Button
        className="focus-visible:ring-zing-300 flex w-full items-center justify-between rounded-lg
        border border-slate-50/[0.06] bg-zinc-700 px-4 py-2 text-left text-lg font-medium
        text-white hover:border-slate-50/[0.12] hover:bg-zinc-900 focus:outline-none
        focus-visible:ring focus-visible:ring-opacity-75"
      >
        <span className="flex items-center gap-2">
          <Image
            src={`/images/${title}.png`}
            alt={title}
            width={40}
            height={40}
          />
          {title === "essencetaping" ? "Энергокинез" : "Эфирокинез"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform duration-100 ui-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="flex flex-col gap-2 px-4 ">
          {gatheringData.map((resource) => (
            <div key={resource.id} className="flex gap-2">
              <button
                className="inline-flex h-[30px] justify-center rounded-md border border-slate-50/[0.06]
          bg-zinc-700 px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </button>
              <button
                onClick={() => changeGatheringMaterialVisibility(resource.id)}
                className={`group flex items-center gap-2 rounded-md  hover:bg-zinc-700 ${
                  isGatheringMaterialHidden(resource.id) ? "opacity-25" : ""
                }`}
              >
                <Image
                  src={`/images/gathering/${resource.nameIcon}.png`}
                  alt={resource.name}
                  height={30}
                  width={30}
                  className="transition duration-150 ease-in-out group-hover:scale-110"
                />

                <span
                  className={`text-lg text-slate-200 ${
                    isGatheringMaterialHidden(resource.id) ? "line-through" : ""
                  }`}
                >{`${resource.gathering_lvl} - ${resource.name}`}</span>
              </button>
            </div>
          ))}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};
