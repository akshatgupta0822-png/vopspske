import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import SectionReveal from "@/components/section-reveal"

const faqs = [
  {
    question: "What is Voice for Peace?",
    answer:
      "Voice for Peace is a grassroots movement dedicated to building bridges through dialogue, community action, and peaceful conflict resolution. We work locally in India and globally to create lasting change through education, mediation, and community engagement.",
  },
  {
    question: "How can I get involved?",
    answer:
      "Volunteer at local events in Bhopal, join our training programs, attend community circles, or start an initiative at your school. Visit our initiatives page or contact us to learn more.",
  },
  {
    question: "Do you offer conflict mediation training?",
    answer:
      "Yes. We provide training in mediation and nonviolent communication for all ages—with sessions often hosted at Sagar Public School, Katara Extension.",
  },
  {
    question: "Are your events free to attend?",
    answer: "Most events are free or sliding scale. We believe in making peace education accessible to everyone.",
  },
  {
    question: "How do you support youth leadership?",
    answer:
      "Through leadership training, peer mediation, public speaking, and chances to lead community projects across Madhya Pradesh and beyond.",
  },
  {
    question: "Can I start a Voice for Peace chapter in my city?",
    answer:
      "Yes. We provide resources, training, and ongoing support as you build a sustainable peace-building community in your area.",
  },
  {
    question: "How is Voice for Peace funded?",
    answer:
      "Community donations, grants, and partnerships with schools like Sagar Public School. All funds support programs and community projects.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. We have partners in multiple cities worldwide while keeping strong local roots in India.",
  },
]

function Page() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold heading-accent">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mt-2">
              Answers about our mission, programs, and how to get involved with Voice for Peace.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 hover-lift">
                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left p-6 flex items-center justify-between rounded-lg focus:outline-none hover:bg-neutral-50 transition-colors">
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent
                    className="
                      data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2
                      data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2
                    "
                  >
                    <CardContent className="pt-0 pb-6 px-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={600}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium hover:underline transition-colors btn-press"
              aria-label="Contact us for more information"
            >
              Get in touch with our team
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}

export default Page
