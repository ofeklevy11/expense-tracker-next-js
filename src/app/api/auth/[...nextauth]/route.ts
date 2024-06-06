import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
      }),],
      callbacks: {
        session: async ({ session, token }) => {
          if (session?.user) {
            session.user.id = token.sub;// token.uid or token.sub both work
          }
          return session;
        },
        jwt: async ({ user, token }) => {
          if (user) {
            token.sub = user.id; // token.uid or token.sub both work
          }
          return token;
        },
      },

    }

    const handler = NextAuth(authOptions);

    export { handler as GET, handler as POST };