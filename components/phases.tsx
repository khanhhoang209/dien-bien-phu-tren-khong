export function Phases() {
  const phases = [
    {
      number: 1,
      name: 'Giai Đoạn Chuẩn Bị',
      dates: '1960 - 1972',
      description: 'Xây dựng hệ thống phòng thủ, huấn luyện nhân lực, chuẩn bị sức mạnh quân sự để ứng phó với cuộc tấn công',
      details: [
        'Xây dựng hệ thống radar tiên tiến',
        'Triển khai pháo phòng không S-75 Dvina (SAM)',
        'Huấn luyện các phi công và lính phòng không',
        'Chuẩn bị chiến lược phòng thủ toàn diện',
      ],
    },
    {
      number: 2,
      name: 'Giai Đoạn Toàn Lực Tấn Công',
      dates: '18 - 22 tháng 12',
      description: 'Hoa Kỳ phát động chiến dịch ném bom B-52 quy mô lớn nhất trong lịch sử tại Hà Nội, Hải Phòng và các vùng phụ cận',
      details: [
        'B-52 ném bom liên tục ngày đêm',
        'Sử dụng hơn 15.000 tấn bom',
        'Không quân Mỹ mất đội hình lần đầu tiên',
        'Hạ bằng được 34 máy bay B-52 trong giai đoạn này',
      ],
    },
    {
      number: 3,
      name: 'Giai Đoạn Tiếp Tục Chiến Đấu',
      dates: '23 - 29 tháng 12',
      description: 'Không quân Mỹ tiếp tục chiến dịch với cường độ cao hơn nhưng gặp phải sự kháng cự quả cảm của không quân Việt Nam',
      details: [
        'Pháo thủ Việt Nam bắn hạ 23 máy bay B-52',
        'Chiến lược phòng thủ cơ động được áp dụng hiệu quả',
        'Quân nhân Việt Nam thể hiện tinh thần bất khuất',
        'Chiến dịch phải tạm dừng vì tổn thất nặng nề',
      ],
    },
    {
      number: 4,
      name: 'Giai Đoạn Kết Thúc & Thắng Lợi',
      dates: '29 tháng 12 - 1973',
      description: 'Chiến dịch kết thúc với thắng lợi vẻ vang của Việt Nam, Mỹ phải chấp nhận thất bại và ký kết Hiệp định Paris',
      details: [
        'Tổng cộng 81 máy bay B-52 bị bắn hạ',
        'Trên 1.600 máy bay quân sự Mỹ bị tiêu diệt',
        'Chiến dịch ném bom Linebacker II phải dừng lại',
        'Hiệp định Paris được ký kết (27.1.1973)',
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Các Giai Đoạn Chiến Dịch</span>
          </h2>
          <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những mốc thời gian quan trọng trong cuộc chiến tranh đấu bảo vệ bầu trời quê hương
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid gap-8">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className="relative bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-colors"
            >
              {/* Phase header with number */}
              <div className="flex items-start gap-6 p-8">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-2xl">
                    {phase.number}
                  </div>
                </div>

                {/* Phase info */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {phase.name}
                    </h3>
                    <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-lg font-semibold w-fit">
                      {phase.dates}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Details list */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <p className="text-foreground/80">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent line on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Summary box */}
        <div className="mt-16 bg-gradient-to-r from-accent/15 to-accent/5 rounded-lg p-8 border border-accent/30">
          <h3 className="text-2xl font-bold text-accent mb-4">Tóm Tắt Chiến Dịch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-accent font-bold text-3xl mb-2">12 ngày</p>
              <p className="text-foreground/80">Chiến dịch ném bom liên tục</p>
            </div>
            <div>
              <p className="text-accent font-bold text-3xl mb-2">81 B-52</p>
              <p className="text-foreground/80">Máy bay chiến lược bị bắn hạ</p>
            </div>
            <div>
              <p className="text-accent font-bold text-3xl mb-2">100%</p>
              <p className="text-foreground/80">Chiến thắng của tinh thần bất khuất</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
