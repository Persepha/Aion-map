import Link from "next/link";
import { NextPage } from "next";
import { FactionBreadcrumbsProps } from "@/components/FactionBreadcrumbs/FactionBreadcrumbs.props";
import { LocationEnum, LocationEnumType } from "@/utils/locations/types";

export const FactionBreadcrumbs: NextPage<FactionBreadcrumbsProps> = ({
  faction,
  location,
}) => {
  return (
    // <nav
    //   className=" my-3 flex h-8 items-center justify-center rounded-md
    //       border border-slate-50/[0.06] bg-zinc-700 px-2 shadow-sm"
    // >
    <nav
      className=" my-3 flex h-8 items-center justify-center rounded-md
          border border-slate-50/[0.06] bg-black/50 px-2 shadow-sm supports-[backdrop-filter]:backdrop-blur-xl"
    >
      <ol className="flex list-none">
        <li>
          {
            <Link
              href={"/"}
              className="text-white transition duration-150 ease-in-out
              hover:text-slate-400 focus:text-slate-400 active:text-amber-900"
            >
              Атрея
            </Link>
          }
        </li>
        <li>
          <span className="mx-2 text-neutral-100/50  ">/</span>
        </li>
        <li className="text-white">
          <Link
            href={`/${faction}`}
            className="text-white transition duration-150 ease-in-out
              hover:text-slate-400 focus:text-slate-400 active:text-amber-900"
          >
            {LocationEnum[faction as LocationEnumType]}
          </Link>
        </li>
        {location && (
          <>
            <li>
              <span className="mx-2 text-neutral-100/50">/</span>
            </li>
            <li className="text-slate-400">
              {LocationEnum[location as LocationEnumType]}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};
