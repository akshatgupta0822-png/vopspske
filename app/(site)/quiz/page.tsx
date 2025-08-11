"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, Award, Brain, RefreshCw, Share2 } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  category: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What does 'Ahimsa' mean in the context of peace-building?",
    options: [
      "Non-violence in thought, word, and action",
      "Religious meditation",
      "Community service",
      "Political activism",
    ],
    correct: 0,
    explanation:
      "Ahimsa is a fundamental principle meaning non-violence in all aspects of life, forming the foundation of peaceful conflict resolution.",
    category: "Philosophy",
  },
  {
    id: 2,
    question: "Which technique is most effective in active listening during conflict resolution?",
    options: [
      "Interrupting to clarify",
      "Paraphrasing what you heard",
      "Giving immediate advice",
      "Changing the subject",
    ],
    correct: 1,
    explanation:
      "Paraphrasing demonstrates that you've truly heard and understood the speaker, building trust and connection.",
    category: "Communication",
  },
  {
    id: 3,
    question: "What is the primary goal of peer mediation in schools?",
    options: [
      "Punishment of wrongdoers",
      "Empowering students to resolve conflicts",
      "Reducing teacher workload",
      "Improving test scores",
    ],
    correct: 1,
    explanation:
      "Peer mediation empowers students with conflict resolution skills, creating a more harmonious school environment.",
    category: "Education",
  },
  {
    id: 4,
    question: "According to Gandhi's philosophy, what should be the first step in addressing conflict?",
    options: ["Legal action", "Public protest", "Self-reflection and change", "Seeking media attention"],
    correct: 2,
    explanation:
      "Gandhi believed in 'being the change you wish to see' - starting with personal transformation before addressing external conflicts.",
    category: "Philosophy",
  },
  {
    id: 5,
    question: "What does 'Vasudhaiva Kutumbakam' teach us about community building?",
    options: [
      "Local communities are most important",
      "The world is one family",
      "Competition builds strength",
      "Isolation prevents conflict",
    ],
    correct: 1,
    explanation:
      "This Sanskrit phrase means 'the world is one family,' emphasizing our interconnectedness and shared humanity.",
    category: "Culture",
  },
  {
    id: 6,
    question: "In conflict resolution, what is the most important quality of a mediator?",
    options: ["Being judgmental", "Taking sides", "Remaining neutral and impartial", "Having all the answers"],
    correct: 2,
    explanation:
      "Neutrality and impartiality allow mediators to create safe spaces where all parties feel heard and respected.",
    category: "Mediation",
  },
  {
    id: 7,
    question: "What role do cultural celebrations play in peace-building?",
    options: [
      "They create divisions",
      "They waste resources",
      "They build bridges between communities",
      "They are purely entertainment",
    ],
    correct: 2,
    explanation:
      "Cultural celebrations help people understand and appreciate diversity, breaking down barriers and building connections.",
    category: "Culture",
  },
  {
    id: 8,
    question: "Which UN Sustainable Development Goal directly relates to peace-building?",
    options: [
      "Goal 16: Peace, Justice and Strong Institutions",
      "Goal 1: No Poverty",
      "Goal 13: Climate Action",
      "Goal 4: Quality Education",
    ],
    correct: 0,
    explanation:
      "SDG 16 specifically focuses on promoting peaceful and inclusive societies, providing access to justice for all.",
    category: "Global",
  },
  {
    id: 9,
    question: "What is the key principle behind restorative justice?",
    options: ["Punishment and deterrence", "Healing and repairing harm", "Quick resolution", "Public shaming"],
    correct: 1,
    explanation:
      "Restorative justice focuses on healing the harm caused by conflict and rebuilding relationships rather than just punishment.",
    category: "Justice",
  },
  {
    id: 10,
    question: "How can mindfulness practices enhance conflict resolution?",
    options: [
      "By making people passive",
      "By helping people stay present and calm",
      "By avoiding difficult conversations",
      "By speeding up the process",
    ],
    correct: 1,
    explanation:
      "Mindfulness helps people remain present, calm, and emotionally regulated during difficult conversations, leading to better outcomes.",
    category: "Mindfulness",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0)
    }, 0)
  }

  const getScoreMessage = (score: number) => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 90) return { message: "Outstanding! You're a peace-building expert!", color: "text-emerald-600" }
    if (percentage >= 80)
      return { message: "Excellent! You have strong knowledge of peace principles.", color: "text-emerald-600" }
    if (percentage >= 70) return { message: "Good work! You understand the basics well.", color: "text-blue-600" }
    if (percentage >= 60) return { message: "Not bad! Keep learning about peace-building.", color: "text-orange-600" }
    return { message: "Keep studying! There's always room to grow in peace-building.", color: "text-red-600" }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setQuizCompleted(false)
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (showResults) {
    const score = calculateScore()
    const scoreMessage = getScoreMessage(score)

    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Quiz Complete!
              </CardTitle>
              <CardDescription className="text-lg">Here are your results on peace-building knowledge</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {score}/{quizQuestions.length}
                </div>
                <div className="text-2xl font-semibold mb-2">
                  {Math.round((score / quizQuestions.length) * 100)}% Correct
                </div>
                <div className={`text-lg ${scoreMessage.color} font-medium`}>{scoreMessage.message}</div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review Your Answers</h3>
                {quizQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correct

                  return (
                    <Card
                      key={question.id}
                      className={`border-l-4 ${isCorrect ? "border-l-emerald-500 bg-emerald-50/50" : "border-l-red-500 bg-red-50/50"}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2">
                              {index + 1}. {question.question}
                            </h4>
                            <div className="space-y-1 text-sm">
                              <div className={`${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                                Your answer: {question.options[userAnswer]}
                              </div>
                              {!isCorrect && (
                                <div className="text-emerald-700">
                                  Correct answer: {question.options[question.correct]}
                                </div>
                              )}
                              <div className="text-muted-foreground mt-2">{question.explanation}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button
                  onClick={resetQuiz}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground shadow-sm mb-6">
            <Brain className="w-4 h-4 text-emerald-600" />
            <span>Test your peace-building knowledge</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 bg-clip-text text-transparent mb-4">
            Peace-Building Knowledge Quiz
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Challenge yourself with questions about conflict resolution, mediation, and building peaceful communities.
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-emerald-100 text-emerald-800">{question.category}</Badge>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>

            <Progress value={progress} className="h-2 mb-6" />

            <CardTitle className="text-xl md:text-2xl text-gray-900 leading-relaxed">{question.question}</CardTitle>
          </CardHeader>

          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
              className="space-y-4"
            >
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-emerald-50/50 transition-colors duration-200"
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 text-base cursor-pointer leading-relaxed">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 bg-transparent"
              >
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
              >
                {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card className="bg-emerald-50/50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-emerald-800 mb-2">💡 Did You Know?</h3>
              <p className="text-emerald-700 text-sm">
                The Voice for Peace movement draws inspiration from ancient Indian wisdom and modern conflict resolution
                techniques, creating culturally relevant solutions for today's challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
