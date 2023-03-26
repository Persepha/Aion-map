export const MarkerTooiltip = ({ title }: { title: string }) => {
  return (
    <section className="flex flex-col text-white">
      <span className="text-base font-bold">{title}</span>
      <span className="text-neutral-500">Подробнее...</span>
    </section>
  );
};
