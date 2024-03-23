import type { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
// const AUTH_TIMEOUT = 60000;
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    // jwt: {
    //     secret,
    //     // maxAge:11111,
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            httpOptions: {
                timeout: 10000,
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            httpOptions: {
                timeout: 10000,
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },

    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     console.debug('>>>> signIn callback', account, profile);
        //     // if (account.provider === 'google') {
        //     //     return profile.email_verified && profile.email.endsWith('myhost.com');
        //     // }
        //     return false;
        // },
        // async redirect({ url, baseUrl }) {
        //     // console.log(process.env.HTTPS_PROXY);
        //     // console.debug('>>>> redirect callback', url, baseUrl);
        //     // if (url.startsWith('/')) return `${baseUrl}${url}`;
        //     // if (new URL(url).origin === baseUrl) return url;
        //     return baseUrl;
        // },

        async session({ session, user, token }) {
            return { ...user, ...session, token: { ...token } }
        },
        // async session({ session, user, token }) {
        //     console.debug('>>>> session callback', session, user, token);
        //     // const mergedSession = { ...session };
        //     // if (token && token.id_token) {
        //     //     mergedSession.user.id_token = token.id_token;
        //     // }
        //     return session;
        // },
        async jwt({
            token, user, account,
            profile
        }) {
            return { ...token, ...user, ...account }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#ffffff", // Hex color value
        logo: "https://next-auth.js.org/img/logo/logo-sm.png", // Absolute URL to logo image
    },
}
