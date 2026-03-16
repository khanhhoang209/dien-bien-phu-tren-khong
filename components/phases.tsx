'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'

export function Phases() {
  const [zoomedMap, setZoomedMap] = useState<null | {
    src: string
    title: string
  }>(null)

  const phases = [
    {
      number: 1,
      name: 'Giai Đoạn Chuẩn Bị',
      dates: '1960 - 1972',
      description:
        'Xây dựng hệ thống phòng thủ, huấn luyện nhân lực, chuẩn bị sức mạnh quân sự để ứng phó với cuộc tấn công',
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
      description:
        'Hoa Kỳ phát động chiến dịch ném bom B-52 quy mô lớn nhất trong lịch sử tại Hà Nội, Hải Phòng và các vùng phụ cận',
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
      description:
        'Không quân Mỹ tiếp tục chiến dịch với cường độ cao hơn nhưng gặp phải sự kháng cự quả cảm của không quân Việt Nam',
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
      description:
        'Chiến dịch kết thúc với thắng lợi vẻ vang của Việt Nam, Mỹ phải chấp nhận thất bại và ký kết Hiệp định Paris',
      details: [
        'Tổng cộng 81 phi cơ bị bắn rơi, gồm có 34 B-52 (16 chiếc rơi tại chỗ) và 5 chiếc F-111',
        'Trên 1.600 máy bay quân sự Mỹ bị tiêu diệt',
        'Chiến dịch ném bom Linebacker II phải dừng lại',
        'Hiệp định Paris được ký kết (27.1.1973)',
      ],
    },
  ]

  const campaignMaps = [
    {
      src: '/map-1.jpg',
      title: 'Bản đồ chiến dịch 1',
      description: 'Khu vực mục tiêu trọng điểm tại Hà Nội và vùng phụ cận trong giai đoạn đầu.',
    },
    {
      src: '/map-2.jpg',
      title: 'Bản đồ chiến dịch 2',
      description: 'Diễn biến thế trận phòng không và hướng tiếp cận của không quân Mỹ.',
    },
    {
      src: '/map-3.jpg',
      title: 'Bản đồ chiến dịch 3',
      description: 'Toàn cảnh phân bố hỏa lực và kết quả đánh chặn trong các ngày cuối.',
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
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{phase.name}</h3>
                    <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-lg font-semibold w-fit">
                      {phase.dates}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{phase.description}</p>

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
              <p className="text-accent font-bold text-3xl mb-2">81 Phi Cơ</p>
              <p className="text-foreground/80">Bị bắn rơi (gồm 34 B-52 và 5 F-111)</p>
            </div>
            <div>
              <p className="text-accent font-bold text-3xl mb-2">100%</p>
              <p className="text-foreground/80">Chiến thắng của tinh thần bất khuất</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-accent">Bản Đồ</span> Chiến Dịch
            </h3>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Tổng hợp 3 bản đồ mô tả khu vực tác chiến và diễn biến không chiến trong chiến dịch
              Điện Biên Phủ Trên Không.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {campaignMaps.map((map) => (
              <figure
                key={map.src}
                className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <button
                  type="button"
                  onClick={() => setZoomedMap({ src: map.src, title: map.title })}
                  className="relative aspect-[4/3] w-full cursor-zoom-in"
                  aria-label={`Phóng to ${map.title}`}
                >
                  <Image
                    src={map.src}
                    alt={map.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </button>
                <figcaption className="p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{map.title}</h4>
                  <p className="text-sm text-foreground/75">{map.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={!!zoomedMap}
        onOpenChange={(open) => {
          if (!open) setZoomedMap(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="w-[92vw] max-w-[92vw] sm:max-w-[92vw] border-0 bg-transparent p-1 shadow-none sm:p-1"
        >
          <DialogTitle className="sr-only">{zoomedMap?.title ?? 'Ban do chien dich'}</DialogTitle>
          {zoomedMap && (
            <div className="relative mx-auto h-[75vh] w-full">
              <DialogClose
                className="absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-lg font-semibold leading-none text-white hover:bg-black/70"
                aria-label="Dong"
              >
                X
              </DialogClose>
              <Image
                src={zoomedMap.src}
                alt={zoomedMap.title}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
