import { NextPage } from "next";
import { MarkerPopupButtonProps } from "@/components/UI/MarkerPopupButton/MarkerPopupButton.props";

export const MarkerPopupButton: NextPage<MarkerPopupButtonProps> = ({
  ...props
}) => {
  return (
    <button
      className="inline-flex h-[30px] w-full items-center justify-center gap-2 rounded-md
      border border-slate-50/[0.06] bg-zinc-700 px-1 py-1 shadow-sm
      transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
      {...props}
    >
      {props.children}
    </button>
  );
};
