import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const option = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENTPW,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "repaet0105",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "breaker0105",
          email: "breaker0105@nate.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/",
  },

  secret: process.env.NEXT_PUBLIC_CLIENTSECRET,
};

const handler = NextAuth(option);
export { handler as GET, handler as POST };
