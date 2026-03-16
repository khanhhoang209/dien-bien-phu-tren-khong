export function Context() {
  return (
    <section id="context" className="py-20 px-4 scroll-mt-20">
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
              <h3 className="text-2xl font-bold text-accent text-shadow">
                Năm 1972 - Bước Ngoặt Quyết Định
              </h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Chiến tranh Việt Nam bước vào giai đoạn quyết định. Hoa Kỳ thực hiện chiến lược "Việt
              Nam hóa chiến tranh", từng bước rút quân Mỹ nhưng vẫn duy trì sức ép quân sự nhằm buộc
              Việt Nam Dân chủ Cộng hòa chấp nhận các điều kiện đàm phán có lợi cho Hoa Kỳ.
            </p>
            <p className="text-foreground leading-relaxed">
              Trong bối cảnh đó, các cuộc đàm phán hòa bình tại Paris vẫn diễn ra căng thẳng và
              nhiều lần rơi vào bế tắc, khiến tình hình quân sự - chính trị cuối năm 1972 trở nên
              đặc biệt nhạy cảm.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">✈️</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">
                Operation Linebacker II - "Những Ngày Lửa"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Cuối năm 1972, do tiến trình đàm phán không đạt kết quả như mong muốn, chính quyền của
              Tổng thống Richard Nixon quyết định gia tăng áp lực quân sự và phát động chiến dịch
              ném bom chiến lược quy mô lớn từ{' '}
              <span className="text-accent font-semibold">18/12 đến 29/12/1972</span>.
            </p>
            <p className="text-foreground leading-relaxed">
              Mục tiêu chủ yếu là tấn công các trung tâm chính trị, quân sự và hậu cần quan trọng
              tại Hà Nội, Hải Phòng - hai khu vực được xem là đầu não chính trị và mạng lưới giao
              thông - hậu cần chủ chốt của miền Bắc Việt Nam.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🎖️</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">
                Lực Lượng Tấn Công Mạnh Nhất
              </h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Hoa Kỳ sử dụng lực lượng không quân chiến lược mạnh nhất lúc bấy giờ, đặc biệt là máy
              bay ném bom hạng nặng{' '}
              <span className="text-accent font-semibold">B-52 Stratofortress</span>, kết hợp với
              nhiều loại máy bay chiến thuật và phương tiện tác chiến điện tử hiện đại.
            </p>
            <p className="text-foreground leading-relaxed">
              Với cường độ ném bom lớn, Operation Linebacker II được xem là một trong những cuộc
              không kích quy mô lớn và dữ dội nhất trong lịch sử chiến tranh hiện đại.
            </p>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">
                Mục Tiêu Chiến Lược Của Hoa Kỳ
              </h3>
            </div>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>
                  Gây sức ép quân sự và tâm lý mạnh mẽ đối với chính quyền miền Bắc Việt Nam
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>Làm suy yếu cơ sở hạ tầng và hệ thống hậu cần phục vụ chiến tranh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✦</span>
                <span>
                  Buộc phía Việt Nam quay trở lại bàn đàm phán tại Paris và chấp nhận điều khoản có
                  lợi hơn cho Hoa Kỳ
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card/70 rounded-lg p-8 border border-border/50 hover:border-accent/50 transition-colors backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🛡️</div>
              <h3 className="text-2xl font-bold text-accent text-shadow">
                Sự Kháng Cự Của Miền Bắc Việt Nam
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Trái với kỳ vọng ban đầu của Hoa Kỳ, chiến dịch đã gặp sự kháng cự quyết liệt từ hệ
              thống phòng không miền Bắc Việt Nam. Trong suốt 12 ngày đêm, nhiều máy bay Mỹ bị bắn
              hạ, tạo nên cuộc đối đầu quân sự căng thẳng trên bầu trời miền Bắc. Kết quả của giai
              đoạn này góp phần quan trọng dẫn tới việc hai bên tiếp tục đàm phán và ký kết Paris
              Peace Accords vào tháng 01/1973.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
