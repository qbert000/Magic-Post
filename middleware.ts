import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: [ '/sign', '/api/webhook/clerk'],
    ignoredRoutes: ['/api/webhook/clerk'],
});

// export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};




