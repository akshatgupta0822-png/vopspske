"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SectionReveal from "@/components/section-reveal"
import { CheckCircle, XCircle, RotateCcw, Award, Brain } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "What does 'Ahimsa' mean in the context of peace-building?",
    options: ["Non-violence", "Meditation", "Community service", "Religious practice"],
    correct: 0,
    explanation: "Ahimsa is a Sanskrit term meaning non-violence, which is fundamental to peace-building philosophy.",
  },
  {
    id: 2,
    question: "Which Nobel Peace Prize winner said 'Be the change you wish to see in the world'?",
    options: ["Nelson Mandela", "Martin Luther King Jr.", "Mahatma Gandhi", "Mother Teresa"],
    correct: 2,
    explanation: "This famous quote is attributed to Mahatma Gandhi, who won the Nobel Peace Prize in 1948.",
  },
  {
    id: 3,
    question: "What is the first step in effective conflict resolution?",
    options: ["Finding a solution", "Active listening", "Taking sides", "Avoiding the conflict"],
    correct: 1,
    explanation: "Active listening is crucial as it helps understand all perspectives before seeking solutions.",
  },
  {
    id: 4,
    question: "Which UN Sustainable Development Goal focuses on peace and justice?",
    options: ["SDG 15", "SDG 16", "SDG 17", "SDG 14"],
    correct: 1,
    explanation: "SDG 16 focuses on 'Peace, Justice and Strong Institutions'.",
  },
  {
    id: 5,
    question: "What is 'Sarvodaya' in Gandhi's philosophy?",
    options: ["Individual freedom", "Welfare of all", "Economic growth", "Political power"],
    correct: 1,
    explanation: "Sarvodaya means 'welfare of all' and represents Gandhi's vision of inclusive development.",
  },
  {
    id: 6,
    question: "Which approach is most effective for youth peace education?",
    options: ["Lectures only", "Peer-to-peer learning", "Online courses", "Reading books"],
    correct: 1,
    explanation: "Peer-to-peer learning is highly effective as young people relate better to their peers.",
  },
  {
    id: 7,
    question: "What does 'Vasudhaiva Kutumbakam' mean?",
    options: ["Individual success", "The world is one family", "National pride", "Economic prosperity"],
    correct: 1,
    explanation: "This Sanskrit phrase means 'the world is one family', emphasizing global unity.",
  },
  {
    id: 8,
    question: "Which is NOT a pillar of sustainable peace?",
    options: ["Justice", "Dialogue", "Competition", "Reconciliation"],
    correct: 2,
    explanation: "Competition can create division, while justice, dialogue, and reconciliation build peace.",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(true)
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "Excellent! You're a peace-building expert! 🌟"
    if (percentage >= 60) return "Great job! You have solid knowledge about peace. 👏"
    if (percentage >= 40) return "Good effort! Keep learning about peace-building. 📚"
    return "Keep exploring! Every step toward peace knowledge matters. 🌱"
  }

  if (quizCompleted) {
    return (
      <div className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/20"></div>
        <div className="container mx-auto px-4 max-w-2xl relative">
          <SectionReveal>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {score}/{quizQuestions.length}
                  </div>
                  <p className="text-lg text-muted-foreground">{getScoreMessage()}</p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Your Performance</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-emerald-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {Math.round((score / quizQuestions.length) * 100)}% correct
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button asChild>
                    <a href="/resources">
                      <Brain className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20"></div>
      <div className="container mx-auto px-4 max-w-2xl relative">
        <SectionReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 backdrop-blur-sm px-4 py-2 text-sm text-blue-700 mb-6">
              <Brain className="w-4 h-4" />
              <span className="font-medium">Test Your Knowledge</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Peace Knowledge Quiz</h1>
            <p className="text-muted-foreground">
              Test your understanding of peace-building concepts and learn something new!
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <Badge variant="outline">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Score: {score}/{currentQuestion}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h2 className="text-xl font-semibold">{question.question}</h2>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? showResult
                          ? index === question.correct
                            ? "border-green-500 bg-green-50 text-green-800"
                            : "border-red-500 bg-red-50 text-red-800"
                          : "border-blue-500 bg-blue-50"
                        : showResult && index === question.correct
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && (
                        <div>
                          {index === question.correct ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}

              <Button onClick={handleNext} disabled={selectedAnswer === null || showResult} className="w-full">
                {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </div>
  )
}
