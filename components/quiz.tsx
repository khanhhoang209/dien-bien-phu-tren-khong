'use client'

import { useState } from 'react'

const quizQuestions = [
  {
    id: 1,
    question: 'Chiến dịch ném bom Mỹ diễn ra từ ngày nào đến ngày nào?',
    options: [
      '10/12 - 25/12/1972',
      '18/12 - 29/12/1972',
      '20/12 - 31/12/1972',
      '15/12 - 28/12/1972',
    ],
    correct: 1,
    explanation:
      'Chiến dịch Operation Linebacker II diễn ra từ 18/12 đến 29/12/1972, kéo dài 12 ngày đêm.',
  },
  {
    id: 2,
    question: 'Máy bay ném bom chính của Mỹ trong chiến dịch này là gì?',
    options: ['F-4 Phantom', 'B-29 Superfortress', 'B-52 Stratofortress', 'P-51 Mustang'],
    correct: 2,
    explanation:
      'B-52 Stratofortress là máy bay ném bom hạng nặng được gọi là "pháo đài bay" của Mỹ lúc bấy giờ.',
  },
  {
    id: 3,
    question: 'Phi công nào bắn rơi B-52 vào đêm 27/12/1972?',
    options: ['Nguyễn Văn Cốc', 'Phạm Thanh', 'Phạm Tuân', 'Vũ Xuân Thiệu'],
    correct: 2,
    explanation:
      'Phi công Phạm Tuân bắn rơi chiếc B-52 ném bom chiến lược vào đêm 27/12/1972 trong cuộc bảo vệ bầu trời Hà Nội.',
  },
  {
    id: 4,
    question: 'Phi công nào hy sinh bằng cách đâm vào máy bay B-52?',
    options: ['Vũ Xuân Thiệu', 'Nguyễn Văn Cốc', 'Phạm Tuân', 'Phạm Thanh'],
    correct: 0,
    explanation:
      'Phi công Vũ Xuân Thiệu anh dũng hy sinh vì tổ quốc bằng cách đâm vào chiếc B-52 còn mang bom ở tuổi 27.',
  },
  {
    id: 5,
    question: 'Trận chiến ác liệt nhất xảy ra vào ngày nào?',
    options: ['20/12/1972', '23/12/1972', '26/12/1972', '28/12/1972'],
    correct: 2,
    explanation:
      'Ngày 26/12/1972 là ngày Mỹ mở đợt ném bom lớn nhất trong chiến dịch, với trận chiến ác liệt nhất và nhiều máy bay B-52 bị bắn rơi nhất.',
  },
  {
    id: 6,
    question: 'Chiến thắng này được gọi là gì?',
    options: [
      'Chiến thắng Hà Nội',
      'Chiến thắng Hải Phòng',
      'Chiến thắng Điện Biên Phủ trên không',
      'Chiến thắng Miền Bắc',
    ],
    correct: 2,
    explanation:
      'Chiến thắng được gọi là "Điện Biên Phủ trên không" để so sánh với chiến thắng lịch sử năm 1954 khi Việt Nam đánh bại quân đội Pháp.',
  },
]

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)

  const handleAnswerClick = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizFinished(false)
  }

  if (quizFinished) {
    const percentage = (score / quizQuestions.length) * 100
    return (
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-12 border border-accent/50 text-center">
            <h2 className="text-4xl font-bold text-accent mb-4">Hoàn Thành!</h2>
            <div className="text-6xl font-bold text-foreground mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl text-muted-foreground mb-2">
              {percentage === 100
                ? '🏆 Xuất sắc!'
                : percentage >= 80
                  ? '⭐ Rất tốt!'
                  : percentage >= 60
                    ? '✓ Tốt'
                    : '💪 Cố gắng thêm!'}
            </p>
            <p className="text-foreground/80 mb-8">
              Bạn đã trả lời đúng {percentage.toFixed(0)}% các câu hỏi
            </p>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Làm Lại Quiz
            </button>
          </div>
        </div>
      </section>
    )
  }

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-2xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">KIỂM TRA</span> KIẾN THỨC
          </h2>
          <p className="text-muted-foreground">
            Thử thách bản thân với những câu hỏi về chiến thắng Điện Biên Phủ trên không
          </p>
          <div className="h-1 w-16 bg-accent mx-auto mt-4"></div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              Câu hỏi {currentQuestion + 1}/{quizQuestions.length}
            </span>
            <span className="text-accent font-semibold">{score} điểm</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-card rounded-lg p-8 border border-accent/50 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{question.question}</h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === null
                    ? 'border-card-foreground/20 hover:border-accent/50 bg-transparent'
                    : selectedAnswer === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-red-500 bg-red-500/10 text-red-400'
                      : index === question.correct && showResult
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-card-foreground/20 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedAnswer === index
                        ? isCorrect
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : index === question.correct && showResult
                          ? 'border-green-500 bg-green-500'
                          : 'border-current'
                    }`}
                  >
                    {selectedAnswer === index && isCorrect && '✓'}
                    {selectedAnswer === index && !isCorrect && '✗'}
                    {index === question.correct && showResult && selectedAnswer !== index && '✓'}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                isCorrect
                  ? 'bg-green-500/10 border border-green-500/50 text-green-400'
                  : 'bg-blue-500/10 border border-blue-500/50 text-blue-400'
              }`}
            >
              <p className="text-sm">
                {isCorrect ? '✓ Chính xác!' : 'ℹ️ Giải thích:'} {question.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Next button */}
        {showResult && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Xem Kết Quả' : 'Câu Hỏi Tiếp Theo'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
