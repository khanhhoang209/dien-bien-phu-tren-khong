export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Về Chúng Tôi</span>
          </h2>
          <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trang web này được xây dựng để tưởng niệm và lưu giữ ký ức về chiến thắng lịch sử vĩ đại
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                ✈️
              </div>
              <h3 className="text-2xl font-bold">Sứ Mệnh</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Lưu giữ và truyền tải những giá trị lịch sử của cuộc Chiến thắng Điện Biên Phủ Trên
              Không cho các thế hệ tiếp theo, giáo dục về tinh thần anh dũng, bất khuất và độc lập
              tự chủ của dân tộc Việt Nam.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                🏆
              </div>
              <h3 className="text-2xl font-bold">Tầm Nhìn</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Xây dựng một không gian học tập tương tác, kết nối mọi người với lịch sử quốc gia,
              khơi dậy niềm tự hào dân tộc và truyền lửa yêu nước cho thế hệ tương lai.
            </p>
          </div>
        </div>

        {/* Historical Significance */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-12 border border-accent/20 mb-16">
          <h3 className="text-3xl font-bold mb-6 text-accent">Ý Nghĩa Lịch Sử</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <p className="text-foreground/80">
                Ngày đêm chiến đấu liên tục từ 18-29 tháng 12 năm 1972
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">81</div>
              <p className="text-foreground/80">
                Phi cơ bị bắn rơi, gồm có 34 B-52 (16 chiếc rơi tại chỗ) và 5 chiếc F-111, gây tổn
                thất nặng nề cho không quân Mỹ
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <p className="text-foreground/80">
                Tinh thần bất khuất vĩnh viễn được lưu lại trong lòng dân tộc
              </p>
            </div>
          </div>
        </div>

        {/* Team/Contributors info */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Thành Viên Dự Án</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h4 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                <span>📝</span> Soạn Nội Dung
              </h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Vũ Đinh Khánh Hà
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Lê Vĩnh Khánh Huyền
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Dương Khánh Đoan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Lê Mai Phương
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h4 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                <span>💻</span> Code
              </h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Lê Hoàng Khánh
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Nguyễn Minh Quân
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/50"></span> Trịnh Tiến Đạt
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">AI Tool Used</h3>
          <a
            href="https://docs.google.com/document/d/1ekAwiGDDpJVN97xZB2EQmbT181F1pkmywc_-0-Bp_Fk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            <span>🔗</span> Xem Tài Liệu Prompts
          </a>
        </div>
      </div>
    </section>
  )
}
