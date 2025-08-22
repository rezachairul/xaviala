import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // cari user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // cek user + password hash
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 2, // 2 jam (detik)
  },
  jwt: {
    maxAge: 60 * 60 * 2, // 2 jam
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // kalau belum login, redirect ke sini
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
