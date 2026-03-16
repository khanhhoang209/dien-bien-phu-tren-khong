export function Results() {
  return (
    <section id="results" className="py-20 px-4 bg-transparent scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">KẾT QUẢ</span> VÀ{' '}
            <span className="text-accent">Ý NGHĨA</span>
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent mb-6">Thành Tích Chiến Đấu</h3>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <h4 className="text-xl font-bold text-foreground mb-3">Máy Bay Bị Bắn Rơi</h4>
              <p className="text-foreground/90">
                Hệ thống phòng không gồm tên lửa, pháo cao xạ và không quân đã phối hợp chặt chẽ,
                bắn rơi <span className="text-accent font-bold">hàng chục máy bay Mỹ</span>, trong
                đó có nhiều B-52 Stratofortress - loại "pháo đài bay" hiện đại bậc nhất của Hoa Kỳ.
                Theo nhiều nguồn tài liệu lịch sử, đây là mức tổn thất lớn đối với không quân chiến
                lược Mỹ trong một chiến dịch ngắn ngày.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <h4 className="text-xl font-bold text-foreground mb-3">Tổn Thất Mỹ</h4>
              <p className="text-foreground/90">
                Đây là tổn thất{' '}
                <span className="text-accent font-bold">lớn đối với không quân chiến lược Mỹ</span>{' '}
                và gây tác động mạnh đến dư luận quốc tế. Các tướng Mỹ phải thừa nhận sự thất bại
                của chiến lược ném bom chiến lược.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <h4 className="text-xl font-bold text-foreground mb-3">Tuyên Bố Ngừng Ném Bom</h4>
              <p className="text-foreground/90">
                Ngày <span className="text-accent font-bold">30/12/1972</span>, Tổng thống Mỹ
                Richard Nixon tuyên bố{' '}
                <span className="text-accent font-bold">
                  ngừng ném bom miền Bắc Việt Nam từ vĩ tuyến 20 trở ra
                </span>
                . Hoa Kỳ buộc phải quay trở lại các cuộc đàm phán hòa bình tại Paris.
              </p>
            </div>
          </div>

          {/* Historical Significance */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent mb-6">Ý Nghĩa Lịch Sử</h3>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Khẳng Định Sức Mạnh Phòng Không
                  </h4>
                  <p className="text-foreground/90">
                    Chiến thắng khẳng định khả năng phòng không và ý chí chiến đấu của Việt Nam
                    trước sức mạnh quân sự hiện đại của siêu cường.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✌️</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Buộc Hòa Bình</h4>
                  <p className="text-foreground/90">
                    Góp phần buộc Hoa Kỳ phải chấp nhận giải pháp đàm phán để kết thúc chiến tranh
                    tại Paris Peace Accords (27/01/1973).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Dấu Mốc Quan Trọng</h4>
                  <p className="text-foreground/90">
                    Trở thành dấu mốc quan trọng trong lịch sử kháng chiến chống Mỹ, tác động mạnh
                    đến cục diện chính trị - quân sự và tiến trình kết thúc sự can thiệp quân sự
                    trực tiếp của Hoa Kỳ tại Việt Nam.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-foreground/10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Tên Gọi "Điện Biên Phủ Trên Không"
                  </h4>
                  <p className="text-foreground/90">
                    Chiến thắng được gọi là "Battle of Dien Bien Phu in the Air" để so sánh với
                    chiến thắng Điện Biên Phủ năm 1954. Cả hai đều là những bước ngoặt chiến lược,
                    góp phần thay đổi cục diện chiến tranh và mở đường cho giải pháp hòa bình.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paris Peace Accords */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-8 border border-accent/30 mt-12">
          <h3 className="text-2xl font-bold text-accent mb-4">Paris Peace Accords - 27/01/1973</h3>
          <p className="text-foreground/90 leading-relaxed">
            Kết quả của chiến thắng "Điện Biên Phủ trên không" là Hoa Kỳ buộc phải quay trở lại bàn
            đàm phán. Ngày 27 tháng 1 năm 1973, các bên ký kết Paris Peace Accords, chấm dứt sự can
            thiệp quân sự trực tiếp của Hoa Kỳ tại Việt Nam. Đây là bước ngoặt quan trọng dẫn đến
            chiến thắng cuối cùng của Việt Nam vào năm 1975.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-card rounded-lg p-6 text-center border border-accent/50">
            <div className="text-4xl font-bold text-accent mb-2">12</div>
            <p className="text-foreground/80 text-sm">Ngày Đêm Chiến Đấu</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-accent/50">
            <div className="text-4xl font-bold text-accent mb-2">81</div>
            <p className="text-foreground/80 text-sm">Phi Cơ Bị Bắn Rơi</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-accent/50">
            <div className="text-4xl font-bold text-accent mb-2">1973</div>
            <p className="text-foreground/80 text-sm">Paris Peace Accords</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center border border-accent/50">
            <div className="text-4xl font-bold text-accent mb-2">1975</div>
            <p className="text-foreground/80 text-sm">Thống Nhất Đất Nước</p>
          </div>
        </div>
      </div>
    </section>
  )
}
