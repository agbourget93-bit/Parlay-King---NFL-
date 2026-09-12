export default function Home() {
  return (
    <main style={{ padding: '48px 24px', maxWidth: '640px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>🏈 NFL Prop Builder</h1>
      <p style={{ color: '#a0a4ad', lineHeight: 1.6 }}>
        Starter deployment is live. This is milestone 1 — confirming the
        database and odds feed are both reachable before we build the real
        pipeline and UI.
      </p>
      <p style={{ marginTop: '24px' }}>
        
          href="/api/test-connection"
          style={{ color: '#4ea8ff', fontWeight: 600 }}
        >
          Check connection status →
        </a>
      </p>
    </main>
  );
}
