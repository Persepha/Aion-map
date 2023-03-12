import { Roboto } from "next/font/google";

const font = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className={font.className}>Start</main>
    </>
  );
}
