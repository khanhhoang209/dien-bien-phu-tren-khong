export function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        {/*<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div> */}

        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Top decorative line */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        {/* Main title - Extra large and bold */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-pretty text-shadow-lg">
          <span className="block text-accent">CHIẾN THẮNG</span>
          <span className="block text-foreground">ĐIỆN BIÊN PHỦ</span>
          <span className="block text-primary">TRÊN KHÔNG</span>
        </h1>

        {/* Date and duration */}
        <div className="inline-block bg-accent/25 backdrop-blur-md border border-accent/50 rounded-lg px-6 py-3 mb-8 text-shadow">
          <p className="text-accent font-bold text-lg">12 NGÀY ĐÊM - 18 ĐẾN 29 THÁNG 12 NĂM 1972</p>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto font-semibold mb-2 text-pretty text-shadow">
            Hào Hùng • Anh Dũng • Bất Khuất
          </p>
          <p className="text-xl md:text-2xl text-accent font-semibold text-pretty text-shadow">
            Lần đầu tiên trong lịch sử "Pháo đài bay B-52 của Mỹ bị bắn hạ"
          </p>
        </div>

        {/* Descriptive paragraph */}
        <p className="text-md text-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-shadow">
          Chiến thắng vĩ đại của dân tộc Việt Nam trên bầu trời miền Bắc - Bảo vệ toàn vẹn chủ quyền
          quốc gia, khẳng định tinh thần độc lập tự chủ và bất khuất của nhân dân Việt Nam trước
          cuộc tấn công quy mô lớn nhất của không quân Mỹ
        </p>

        {/* Statistics row */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-card/60 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors">
            <p className="text-accent font-bold text-3xl text-glow">81</p>
            <p className="text-foreground text-sm mt-2 font-semibold">Phi Cơ Bị Bắn Rơi</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors">
            <p className="text-accent font-bold text-3xl text-glow">1,600+</p>
            <p className="text-foreground text-sm mt-2 font-semibold">Máy Bay Mỹ Tiêu Diệt</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors">
            <p className="text-accent font-bold text-3xl text-glow">∞</p>
            <p className="text-foreground text-sm mt-2 font-semibold">Tinh Thần Bất Khuất</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#context"
          className="inline-block px-10 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
        >
          KHÁM PHÁ SỰ KIỆN
        </a>
      </div>
    </div>
  )
}
