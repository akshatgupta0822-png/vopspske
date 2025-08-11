export async function POST(req) {
  const data = await req.json().catch(() => null)

  // In a real app, forward to email/SaaS or store in DB here.
  // For now, just echo back success.
  if (!data || !data.email || !data.message) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid payload" }), { status: 400 })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
