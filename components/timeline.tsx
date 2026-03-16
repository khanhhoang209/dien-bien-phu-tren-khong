'use client'

import { useState } from 'react'

const timelineEvents = [
  {
    date: '18/12/1972',
    title: 'Mỹ Mở Cuộc Tấn Công',
    description: 'Mỹ bắt đầu ném bom Hà Nội, Hải Phòng và các khu vực miền Bắc bằng máy bay B-52 Stratofortress. Cuộc không kích quy mô lớn chính thức bắt đầu.',
    intensity: 'high'
  },
  {
    date: '19/12/1972',
    title: 'Quân Dân Phòng Không Đánh Trả',
    description: 'Mỹ tiếp tục các đợt ném bom quy mô lớn. Quân và dân miền Bắc tổ chức phòng không đánh trả quyết liệt, bắn rơi một số máy bay Mỹ.',
    intensity: 'high'
  },
  {
    date: '20/12/1972',
    title: 'Trận Chiến Ác Liệt',
    description: 'Các trận đánh trên bầu trời Hà Nội diễn ra ác liệt. Lực lượng phòng không bắn rơi thêm nhiều máy bay, trong đó có B-52 Stratofortress.',
    intensity: 'critical'
  },
  {
    date: '21-23/12/1972',
    title: 'Chiến Đấu Quyết Liệt',
    description: 'Không quân Mỹ tiếp tục tăng cường đánh phá. Hệ thống phòng không của Việt Nam (tên lửa, pháo cao xạ, không quân tiêm kích) phối hợp chặt chẽ và gây tổn thất lớn cho đối phương.',
    intensity: 'critical'
  },
  {
    date: '24-25/12/1972',
    title: 'Tạm Ngừng và Chuẩn Bị',
    description: 'Mỹ tạm ngừng nem bom nhân dịp Giáng Sinh. Hoạt động ném bom giảm, Mỹ chuẩn bị cho các đợt tấn công tiếp theo.',
    intensity: 'low'
  },
  {
    date: '26/12/1972',
    title: 'Trận Chiến Lớn Nhất',
    description: 'Mỹ mở đợt ném bom lớn nhất trong chiến dịch vào Hà Nội. Đây là trận chiến ác liệt nhất. Nhiều máy bay B-52 bị bắn rơi. Tổn thất của Mỹ lên tới đỉnh điểm.',
    intensity: 'critical'
  },
  {
    date: '27/12/1972',
    title: 'Chiến Đấu Không Ngừng',
    description: 'Quân và dân miền Bắc tiếp tục chiến đấu quyết liệt. Bắn rơi thêm nhiều máy bay Mỹ. Phi công Phạm Tuân anh dũng bắn rơi chiếc B-52 ném bom chiến lược.',
    intensity: 'critical'
  },
  {
    date: '28/12/1972',
    title: 'Cường Độ Giảm',
    description: 'Sau những tổn thất nặng nề, cường độ ném bom của Mỹ giảm đáng kể. Tình thế đã thay đổi.',
    intensity: 'medium'
  },
  {
    date: '29/12/1972',
    title: 'Tuyên Bố Ngừng Ném Bom',
    description: 'Mỹ tuyên bố chấm dứt ném bom miền Bắc Việt Nam, kết thúc chiến dịch Operation Linebacker II. Chiến thắng "Điện Biên Phủ trên không" được công bố.',
    intensity: 'victory'
  }
]

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">12 NGÀY ĐÊM</span> LỊCH SỬ
          </h2>
          <p className="text-muted-foreground">18 - 29 tháng 12 năm 1972</p>
          <div className="h-1 w-16 bg-accent mx-auto mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex gap-6 cursor-pointer">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${
                  event.intensity === 'victory' 
                    ? 'bg-accent ring-4 ring-accent/30' 
                    : event.intensity === 'critical' 
                    ? 'bg-accent' 
                    : event.intensity === 'high'
                    ? 'bg-accent/80'
                    : 'bg-muted/60'
                }`}></div>
                {index < timelineEvents.length - 1 && (
                  <div className={`w-0.5 h-24 ${
                    event.intensity === 'critical' || event.intensity === 'victory'
                      ? 'bg-accent/40'
                      : 'bg-muted/30'
                  }`}></div>
                )}
              </div>

              {/* Event content */}
              <div 
                className="flex-1 pb-6 bg-card rounded-lg p-6 border border-card-foreground/10 hover:border-accent/50 transition-all"
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-accent mb-1">{event.date}</h3>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{event.title}</h4>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ml-4 ${
                    event.intensity === 'victory'
                      ? 'bg-accent/20 text-accent'
                      : event.intensity === 'critical'
                      ? 'bg-red-500/20 text-red-400'
                      : event.intensity === 'high'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}>
                    {event.intensity === 'victory' ? '⭐ CHIẾN THẮNG' : event.intensity === 'critical' ? '🔥 KỊCH LIỆT' : event.intensity === 'high' ? '⚡ MẠNH' : 'GIẢM'}
                  </span>
                </div>
                
                {selectedEvent === index && (
                  <p className="text-foreground/80 leading-relaxed mt-3 animate-in fade-in">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
