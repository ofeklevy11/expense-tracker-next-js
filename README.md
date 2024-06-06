This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

TODOS:
[x] - add landing page
[x] - add sidebar navigation for dashboard
[x] - add dashboard page
[x] - on top of dashboard page add monthly expense goal (the less the better) and make an option for user to choose their monthly expense goal.
[x] - after user have expense goal , add a progress bar of all their monthly expenses (not income expense only) and make the monthly expense goal the max number in the progress bar.
[x] - if monthly expenses > monthly expense goal
? <p>you have exceeded your monthly goal by 1000$(in red)</p> 
: <p>you are in the right direction! less than your monthly expense goal by 1000$(in green)</p>
[x] - in the middle of dashboard page add a chart that shows last 6 months income and expenses side by side.
[x] - add unlimited pagination in add transaction page (limit 10 skip 10)
[x] - add date to all transaction for each transaction + add date picker to add transaction&edit transaction
[x] - add profile page and in profile page option to change(update) the monthly expenses goal.
[x] - Check for each possible empty state and not authenticated user.
