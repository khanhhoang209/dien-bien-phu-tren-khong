'use client'

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-foreground/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Điện Biên Phủ Trên Không</h3>
            <p className="text-muted-foreground">
              Trang web tưởng niệm chiến thắng vĩ đại của dân tộc Việt Nam. Hào hùng - Anh dũng -
              Bất khuất.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Nhanh Chóng</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#context" className="hover:text-accent transition-colors">
                  → Bối Cảnh Chiến Dịch
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-accent transition-colors">
                  → 12 Ngày Đêm
                </a>
              </li>
              <li>
                <a href="#heroes" className="hover:text-accent transition-colors">
                  → Những Người Hùng
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-accent transition-colors">
                  → Kết Quả Và Ý Nghĩa
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-accent transition-colors">
                  → Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Thông Tin</h4>
            <p className="text-muted-foreground mb-3">
              <span className="block font-semibold text-foreground">Chiến Dịch</span>
              18/12 - 29/12/1972
            </p>
            <p className="text-muted-foreground">
              <span className="block font-semibold text-foreground">Địa Điểm</span>
              Hà Nội, Hải Phòng, Miền Bắc Việt Nam
            </p>
            <p className="text-muted-foreground mt-3">
              <span className="block font-semibold text-foreground">Prototype</span>
              Phiên bản prototype tương tác của dự án
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-foreground/10 pt-8 text-center text-muted-foreground text-sm">
          <p>
            Dựng lên để tôn vinh những anh hùng đã bảo vệ bầu trời Tổ quốc |
            <span className="block mt-2">❤️ Lịch sử hào hùng của dân tộc Việt Nam</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
