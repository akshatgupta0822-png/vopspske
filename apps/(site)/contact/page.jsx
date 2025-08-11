import ContactForm from "@/components/contact-form"
import NewsletterForm from "@/components/newsletter-form"

export default function Page() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
            <p className="text-muted-foreground mt-2">
              Questions, ideas, or partnership inquiries? We&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="rounded-xl border p-6 md:p-8 bg-neutral-50">
            <h2 className="text-xl font-semibold">Media & Partnerships</h2>
            <p className="text-muted-foreground mt-2">Reach out for interviews, event collaborations, or press kits.</p>
            <div className="mt-8">
              <h3 className="font-semibold">Subscribe to updates</h3>
              <p className="text-muted-foreground text-sm mt-1">Monthly highlights and upcoming events.</p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              Or email us at{" "}
              <a className="text-emerald-700 hover:underline" href="mailto:hello@voiceforpeace.org">
                hello@voiceforpeace.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
