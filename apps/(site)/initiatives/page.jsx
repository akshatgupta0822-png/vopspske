import InitiativesGrid from "@/components/initiatives-grid"

export default function Page() {
  return (
    <div className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold">Initiatives</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          From conflict mediation to youth leadership, our initiatives create practical pathways to peace.
        </p>
        <div className="mt-10">
          <InitiativesGrid />
        </div>
      </div>
    </div>
  )
}
