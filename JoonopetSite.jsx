export default function JoonoPetLuxury() {
  return (
    <div className="bg-[#071a16] text-white min-h-screen overflow-x-hidden font-sans">
      <section className="relative h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#071a16]" />

        <div className="relative z-10 px-6 pt-16">
          <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-[#a02b43]/20 blur-3xl animate-pulse" />
          <div className="absolute top-40 left-[-40px] w-40 h-40 rounded-full bg-[#1f5b49]/30 blur-3xl" />

          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm tracking-[0.4em] text-[#d7bf86]">
                JOONOPET
              </div>
              <div className="text-xs text-[#9f9f9f] mt-1">
                LUXURY GROOMING SALON
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#d7bf86]/40 shadow-[0_0_60px_rgba(215,191,134,0.18)] mb-8">
              <img
                src="./joono.jpeg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-[#d7bf86] tracking-[0.35em] text-xs mb-4">
              JOONOPET GROOMING
            </div>

            <h1 className="text-5xl leading-[1.1] font-light tracking-tight">
              주노 <span className="text-[#a02b43]">펫</span>
              <br />
              미용실
            </h1>

            <div className="mt-6 text-sm text-[#d2d2d2] tracking-[0.15em]">
              14년 경력 애견미용 강사출신 미용사
            </div>

            <p className="mt-8 text-[#f1ede3] leading-relaxed text-[15px] max-w-[280px]">
              ✦ 감각적인 스타일링과 프리미엄 케어가 함께하는 럭셔리 애견 미용 공간 ✦
            </p>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-10 space-y-4">
          <a
            href="https://map.naver.com/p/entry/place/2054479552"
            target="_blank"
            className="block w-full py-4 rounded-[28px] bg-[#a02b43] text-lg font-medium text-center"
          >
            ✨ 네이버 예약하기
          </a>

          <a
            href="tel:01041808447"
            className="block w-full py-4 rounded-[28px] bg-[#0d241f]/70 border border-white/10 text-lg text-center"
          >
            📞 전화 상담
          </a>

          <a
            href="https://www.instagram.com/joonopet_grooming/"
            target="_blank"
            className="block w-full py-4 rounded-[28px] bg-[#0d241f]/70 border border-white/10 text-lg text-center"
          >
            📷 @joonopet_grooming
          </a>
        </div>
      </section>
    </div>
  )
}
