
const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent"></div>
      <p className="mt-4 font-mono text-sm tracking-widest text-blue-400 animate-pulse">
        INITIALIZING PORTFOLIO...
      </p>
    </div>
  );
};

export default Loader;