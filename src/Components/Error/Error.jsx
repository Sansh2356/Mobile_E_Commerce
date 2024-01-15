const Error = () => {
  return (
    <div className="min-h-screen bg-black w-full flex items-center justify-center flex-col p-2">
      <h1 className="text-white font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl my-2 p-1">
        <span className="text-blue-500 mx-1">{`[404]`}</span>Error
      </h1>
      <h2 className="text-red-700 font-semibold text-4xl my-2 p-1">
        Page/Sources Not Found
      </h2>
    </div>
  );
};

export default Error;
