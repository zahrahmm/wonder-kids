
export default function LearningMaterials() {
  return (
    <section className="w-full px-20 py-15">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-8 items-center">
        {/* Left Column */}
        <div className="col-span-6">
          <h1 className="text-[44px] leading-[54px] font-bold max-w-[680px]">
            The learning materials provided are{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-purple-300 font-semibold">
                enjoyable
              </span>
              <img
                aria-hidden
                src="/Vector2.svg"
                className="absolute left-0 -bottom-4 w-[240px] z-0"
              />
            </span>
            <br />
            for children
          </h1>

          <p className="mt-6 max-w-[520px] text-color-gray text-[15px] leading-[26px]">
            Don’t worry! Your children will be having a fun time while learning
            with our materials that are easy to understand.
          </p>

          {/* CTA Button */}
          <button className="mt-8 flex items-center gap-1 rounded-full border border-purple-300 text-purple-300 px-6 h-[64px] w-[190px] font-semibold text-[18px] bg-white shadow-md hover:text-purple-300/80 transition-all duration-300">
            Learn more
            <img src="/Group 427319385.svg" alt="" className="h-8 w-8" />
          </button>
        </div>

        {/* Right Column */}
        <div className="relative col-span-6 flex flex-col items-end gap-5">
          {/* Top pill */}
          <div className="relative h-[140px] w-[310px]">
            <img src="/Rectangle 21.svg" alt="" className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 rounded-[70px] ">
              <img
                src="/wepik-export-20231122022306GgTX 1.svg"
                alt=""
                className="absolute left-[20px] -top-[80px] h-[220px] w-auto object-contain"
              />
            </div>
            <img
              src="/Vector.svg"
              alt=""
              className="absolute right-[-22px] top-[-20px] z-20 h-[110px] w-[110px]"
            />
          </div>

          {/* Middle pill */}
          <div className="relative h-[140px] w-[440px]">
            <img src="/Rectangle 20.svg" alt="" className="absolute inset-0 h-full w-full" />
            <img
              src="/Vector-1.svg"
              alt=""
              className="absolute -left-[50px] top-[5px] z-20 h-[100px] w-[260px]"
            />
            <div className="absolute inset-0 rounded-[70px] ">
              <img
                src="/wepik-export-20231121071856pDk6 1.svg"
                alt=""
                className="absolute -right-[1px] -top-[70px] z-10 h-[210px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom pill */}
          <div className="relative h-[140px] w-[500px]">
            <img src="/Rectangle 19.svg" alt="" className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 rounded-[70px] ">
              <img
                src="/wepik-export-20231121071829rm8c 1.svg"
                alt=""
                className="absolute left-[50px] -top-[80px] h-[220px] w-auto object-contain"
              />
            </div>
            <img
              src="/Group 427319405.svg"
              alt=""
              className="absolute bottom-[-30px] right-[4px] z-20 h-[140px] w-[140px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
