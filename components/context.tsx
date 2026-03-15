export function Context() {
  return (
    <section id="context" className="py-20 px-4 bg-background scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
            <span className="text-accent">BỐI CẢNH</span>
          </h2>
          <div className="h-1 w-32 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-semibold text-shadow">
            Lịch sử đấu tranh bảo vệ bầu trời quê hương
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🕐</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">Năm 1972 - Bước Ngoặt Quyết Định</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Chiến tranh Việt Nam bước vào giai đoạn quyết định. Hoa Kỳ thực hiện chiến lược "Việt Nam hóa chiến tranh", dần rút quân nhưng vẫn duy trì sức ép quân sự nhằm buộc Việt Nam Dân chủ Cộng hòa chấp nhận các điều kiện có lợi cho Hoa Kỳ.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">✈️</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">Operation Linebacker II - "Những Ngày Lửa"</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Cuối năm 1972, do tiến trình đàm phán không đạt được kết quả như mong muốn, chính quyền Tổng thống Richard Nixon quyết định gia tăng áp lực quân sự. Hoa Kỳ phát động chiến dịch ném bom chiến lược quy mô lớn từ <span className="text-accent font-semibold">18/12 đến 29/12/1972</span>.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🎖️</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">Lực Lượng Tấn Công Mạnh Nhất</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Hoa Kỳ sử dụng lực lượng không quân chiến lược mạnh nhất lúc bấy giờ, đặc biệt là máy bay ném bom hạng nặng <span className="text-accent font-semibold">B-52 Stratofortress</span> (pháo đài bay), kết hợp với nhiều loại máy bay chiến thuật và phương tiện tác chiến điện tử hiện đại. Đây là một trong những cuộc không kích quy mô lớn nhất trong lịch sử chiến tranh hiện đại.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">Mục Tiêu Chiến Lược Của Hoa Kỳ</h3>
            </div>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>Gây sức ép quân sự và tâm lý mạnh mẽ đối với chính quyền miền Bắc Việt Nam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>Làm suy yếu cơ sở hạ tầng và hệ thống hậu cần phục vụ chiến tranh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>Buộc phía Việt Nam quay trở lại bàn đàm phán tại Paris</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
