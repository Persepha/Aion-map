import Link from "next/link";
import { NextPage } from "next";
import { FactionBreadcrumbsProps } from "@/components/FactionBreadcrumbs/FactionBreadcrumbs.props";

export const FactionBreadcrumbs: NextPage<FactionBreadcrumbsProps> = ({
  faction,
}) => {
  return (
    <nav className="my-3 rounded-md bg-neutral-100 px-5 py-3">
      <ol className="flex list-none">
        <li>
          {
            <Link
              href={"/"}
              className="text-amber-600 transition duration-150 ease-in-out hover:text-amber-800 focus:text-amber-800 active:text-amber-900"
            >
              Атрея
            </Link>
          }
        </li>
        <li>
          <span className="mx-2 text-neutral-500  ">/</span>
        </li>
        <li className="text-neutral-500">
          {faction === "elysea" ? "Элиос" : "Асмодея"}
        </li>
      </ol>
    </nav>
  );
};
