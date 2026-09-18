# White Field Digital

Next.js 14 + Tailwind, drie talen (/nl, /en, /de), contactformulier via Resend.

## Deploy op Vercel
1. Upload deze map als repo op GitHub (root = deze map, dus package.json bovenin).
2. Importeer in Vercel, root directory leeg laten.
3. Environment variables: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM (zie .env.example).
4. Domein whitefielddigital.nl koppelen: apex A-record 76.76.21.21 en www CNAME cname.vercel-dns.com.

## Teksten aanpassen
Alle teksten en prijzen staan in lib/i18n.ts, per taal.
