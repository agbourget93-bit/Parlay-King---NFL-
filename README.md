# NFL Prop Builder — Milestone 1

This is the starter deployment. It proves two things work before we build
anything else:

1. The app can talk to your Supabase database.
2. The app can pull live NFL odds from SharpAPI.

## Environment variables needed in Vercel

Set these under Project Settings → Environment Variables after import:

| Name                            | Where to find it                                      |
|----------------------------------|--------------------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`       | Supabase → Project Settings → API → Project URL       |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | Supabase → Project Settings → API → anon public key   |
| `SHARPAPI_KEY`                   | SharpAPI dashboard → API key (starts with `sk_live_`) |

`SHARPAPI_KEY` is intentionally NOT prefixed with `NEXT_PUBLIC_` — that
keeps it server-side only, so it's never visible in the browser.

## Checking it worked

Once deployed, visit `/api/test-connection` on your live Vercel URL. You
should see something like:

```json
{
  "supabase": "connected ✅",
  "sharpapi": "connected ✅ (14 odds rows from: draftkings, fanduel)"
}
```

If either one shows an `error:` message, check that the matching
environment variable is spelled exactly right in Vercel.
