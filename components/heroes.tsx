'use client'

import { useState } from 'react'

const heroes = [
  {
    id: 1,
    name: 'Phạm Tuân',
    rank: 'Phi công MiG-21',
    birth: '1947 - Nay',
    achievement: 'Bắn rơi B-52 trong chiến dịch (27/12/1972)',
    fullBio: 'Phi công anh dũng của Không quân Việt Nam. Đêm 27/12/1972, ông bắn rơi một máy bay ném bom chiến lược B-52 Stratofortress của Mỹ trong chiến dịch bảo vệ bầu trời Hà Nội. Sau này ông trở thành người Việt Nam và người châu Á đầu tiên bay vào vũ trụ (1980).',
    color: 'from-blue-600 to-blue-400',
    image: '/PhamTuan.jpg'
  },
  {
    id: 2,
    name: 'Nguyễn Văn Cốc',
    rank: 'Phi công MiG-21',
    birth: '1942 - Nay',
    achievement: 'Bắn rơi 9 máy bay Mỹ',
    fullBio: 'Một trong những phi công bắn rơi nhiều máy bay Mỹ nhất trong chiến tranh Việt Nam. Với 9 chiến tích, anh đã góp phần quan trọng trong việc bảo vệ bầu trời miền Bắc Việt Nam khỏi các cuộc tấn công của không quân Mỹ.',
    color: 'from-red-600 to-red-400',
    image: '/NguyenVanCoc.png'
  },
  {
    id: 3,
    name: 'Vũ Xuân Thiệu',
    rank: 'Phi công MiG-21',
    birth: '1945 - 1972',
    achievement: 'Hy sinh anh dũng - Đâm vào B-52',
    fullBio: 'Phi công anh dũng hy sinh cho tổ quốc. Sau khi phóng hai tên lửa nhưng chưa hạ được mục tiêu, ông chủ động điều khiển máy bay đâm thẳng vào chiếc B-52 còn mang bom, tiêu diệt đối phương. Ông hy sinh ở tuổi 27 và được truy tặng danh hiệu Anh hùng Lực lượng vũ trang nhân dân.',
    color: 'from-yellow-600 to-yellow-400',
    image: '/VuXuanThieu.jpg'
  },
  {
    id: 4,
    name: 'Phùng Thế Tài',
    rank: 'Chỉ huy cao cấp Phòng không',
    birth: '1920 - 2014',
    achievement: 'Tổ chức hệ thống phòng không',
    fullBio: 'Một trong những chỉ huy quan trọng của Quân chủng Phòng không - Không quân Việt Nam. Ông chỉ đạo tổ chức hệ thống phòng không bảo vệ miền Bắc, phối hợp các lực lượng tên lửa, pháo phòng không, radar và không quân tiêm kích một cách hiệu quả.',
    color: 'from-purple-600 to-purple-400',
    image: '/PhungTheTai.jpg'
  },
  {
    id: 5,
    name: 'Phạm Thanh',
    rank: 'Phi công tiêm kích',
    birth: '1945 - Nay',
    achievement: 'Bắn rơi 8 máy bay Mỹ (1966-1968)',
    fullBio: 'Phi công tiêm kích của Không quân Việt Nam. Từ 1966 đến 1968, cùng đồng đội tham gia chiến đấu và trực tiếp bắn rơi 8 máy bay của đối phương. Sau chiến tranh trở thành Tướng lĩnh Quân đội nhân dân Việt Nam. Được phong danh hiệu Anh hùng Lực lượng vũ trang nhân dân.',
    color: 'from-green-600 to-green-400',
    image: '/PhamThanh.png'
  },
]

export function Heroes() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">NHỮNG NGƯỜI HÙNG</span>
          </h2>
          <p className="text-muted-foreground mb-4">Các anh hùng lịch sử - Chiến sĩ anh dũng bảo vệ bầu trời Hà Nội</p>
          <div className="h-1 w-16 bg-accent mx-auto"></div>
          <p className="text-sm text-muted-foreground mt-4">👈 Nhấp vào thẻ để xem thông tin chi tiết</p>
        </div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="h-96 cursor-pointer perspective"
              onClick={() => setFlipped(flipped === hero.id ? null : hero.id)}
            >
              <div className="relative w-full h-full transition-transform duration-500" style={{
                transformStyle: 'preserve-3d',
                transform: flipped === hero.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* Front - Image side */}
                <div 
                  className="absolute w-full h-full bg-card rounded-lg flex flex-col justify-end overflow-hidden border-2 border-accent/50 group"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url(${hero.image})` }}
                  />
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />

                  {/* Decorative icon */}
                  <div className="absolute top-4 right-4 text-4xl opacity-30 z-10">⭐</div>
                  
                  <div className="relative z-10 p-6">
                    <p className="text-sm text-accent font-semibold mb-2">{hero.rank}</p>
                    <h3 className="text-3xl font-bold text-white mb-2">{hero.name}</h3>
                    <p className="text-sm text-white/70">{hero.birth}</p>
                  </div>
                </div>

                {/* Back - Info side */}
                <div 
                  className="absolute w-full h-full bg-card rounded-lg p-6 flex flex-col justify-between overflow-hidden border-2 border-accent/50"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">{hero.name}</h3>
                    <p className="text-foreground/90 text-sm leading-relaxed">{hero.fullBio}</p>
                  </div>
                  
                  <div className="border-t border-card-foreground/20 pt-4">
                    <p className="text-xs text-accent font-semibold">CHIẾN CÔNG:</p>
                    <p className="text-foreground font-semibold">{hero.achievement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
