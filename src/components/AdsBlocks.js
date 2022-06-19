const AdsBlocks = () => {
  return (
    <div className=" w-full h-auto gap-4 grid grid-flow-col grid-col-2 md:grid-col-3 grid-row-3 md:grid-rows-2">
      <div className=" border row-span-1 md:row-span-2 col-span-2 md:col-span-1 shadow-md hover:scale-[1.02]">
        <div
          className="opacity-75 bg-no-repeat p-10 flex flex-col text-white h-full w-full justify-center"
          style={{
            backgroundImage: `url(http://via.placeholder.com/300)`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-right my-3">نص يمكن استبدالة</p>
          <h1 className="w-2/5 text-justify font-bold text-3xl">
            (1)هذا النص
            <br /> يمكن استبدالة
          </h1>
        </div>
      </div>
      <div className="row-start-2 md:row-start-1 shadow-md hover:scale-[1.02]">
        <div
          className="opacity-75 bg-no-repeat p-10 flex flex-col text-white h-full w-full justify-center"
          style={{
            backgroundImage: `url(http://via.placeholder.com/300)`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-right my-3">نص يمكن استبدالة</p>
          <h1 className="w-2/5 text-justify font-bold text-xl">
            (2)هذا النص
            <br /> يمكن استبدالة
          </h1>
        </div>
      </div>
      <div className=" border shadow-md hover:scale-[1.02] row-start-2 md:row-start-1 col-start-2 md:col-start-3">
        <div
          className="opacity-75 bg-no-repeat p-10 flex flex-col text-white h-full w-full justify-center"
          style={{
            backgroundImage: `url(http://via.placeholder.com/300)`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-right my-3">نص يمكن استبدالة</p>
          <h1 className="w-2/5 text-justify font-bold text-xl">
            (3)هذا النص
            <br /> يمكن استبدالة
          </h1>
        </div>
      </div>
      <div className="border row-start-3 md:row-start-2 col-span-2 shadow-md hover:scale-[1.02]">
        <div
          className="opacity-75 bg-no-repeat p-10 flex flex-col text-white h-full w-full justify-center"
          style={{
            backgroundImage: `url(http://via.placeholder.com/300)`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-right my-3">نص يمكن استبدالة</p>
          <h1 className="w-2/5 text-justify font-bold text-3xl">
            (4)هذا النص
            <br /> يمكن استبدالة
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdsBlocks;
