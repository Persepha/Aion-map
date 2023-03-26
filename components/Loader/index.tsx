export const Loader = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div
        className="inline-block h-20 w-20 animate-spin rounded-full border-[5px] border-current border-t-transparent
        text-blue-700"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
};
