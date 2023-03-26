import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black/60 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat bg-blend-darken">
      <section className="flex items-center justify-center">
        <nav
          className=" my-3 flex h-8 items-center justify-center rounded-md
          border border-slate-50/[0.06] bg-black/50 px-2 shadow-sm supports-[backdrop-filter]:backdrop-blur-xl"
        >
          <Link
            href={"/"}
            className="text-white transition duration-150 ease-in-out
              hover:text-slate-400 focus:text-slate-400 active:text-amber-900"
          >
            Атрея
          </Link>
        </nav>
      </section>
      <section className="h-[90%] w-[90%] p-2 xl:w-1/2">
        <div
          className=" h-full overflow-hidden rounded-md bg-black/60
          bg-[url('/images/about1.png')] bg-right-bottom bg-no-repeat p-6 text-white"
        >
          <div className="h-[calc(100%-200px)] overflow-y-auto break-words p-2 leading-relaxed">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pb-8 text-center text-5xl font-extrabold text-transparent">
              Приветствую, даэвы!
            </h1>
            <div className="flex flex-col gap-4 text-xl">
              <p className="indent-8">
                На данном сайте представлена интерактивная карта мира Аион.
              </p>
              <div className="indent-8">
                На карте можно отобразить следующую информацию:
                <ul className="list-inside list-disc">
                  <li>Именные монстры и боссы локации</li>
                  <li>Энергокинез</li>
                  <li>Эфирокинез</li>
                </ul>
              </div>
              <div className="pl-8">
                <div className="flex gap-2">
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
                  <span>
                    Копирует игровые координаты выбранного элемента в буфер
                    обмена.
                  </span>
                </div>
                <div className="flex gap-2">
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>
                    Отображает все места спавна для выбранного монстра.
                  </span>
                </div>
                <div className="flex gap-2">
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
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  <span>Удаляет все маркеры выбранного элемента с карты.</span>
                </div>
              </div>
              <p className="indent-8">
                На текущий момент интерактивная карта отображает информацию по
                локациям соответствующим Aion Classic 1.9: Арэшурат, Элиос и
                Асмодея.
              </p>
              <article className="pl-8">
                Нашли какую-то неточность? Хотите оставить фидбек? Напишите мне:
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <section className="relative my-2.5 flex flex-1 gap-2 rounded-md border border-slate-50/[0.06] p-2">
                    <span className="flex pr-10 text-lg font-bold">
                      vasilevich.dmt@gmail.com
                    </span>
                  </section>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
                    />
                  </svg>
                  <section className="my-2.5 flex flex-1 gap-2 rounded-md border border-slate-50/[0.06] p-2">
                    <span className="flex pr-10 text-lg font-bold">
                      floodofanger#1045
                    </span>
                  </section>
                </div>
              </article>
              <Link
                href={"/"}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pl-8 text-transparent transition duration-150
              ease-in-out hover:text-slate-400 focus:text-slate-400 active:text-amber-900"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
