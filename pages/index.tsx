import { useRouter } from "next/router";

function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/event-types");
    return;
  }
}

RedirectPage.getInitialProps = (ctx) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/event-types" });
    ctx.res.end();
  }
  return {};
};

export default RedirectPage;
