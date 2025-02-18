import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, NavLink, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LoremIpsum } from "lorem-ipsum";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const logo = "/cymathsin/assets/CY-MATHS-IN-Logo-BJiIuj4l.jpeg";
const graph = "/cymathsin/assets/CY-MATHS-IN-Graph-Bwx1rMDW.jpg";
const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  border-bottom: 2px solid black;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5vw;
  z-index: 100;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.40), 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
`;
const StyledLogo = styled.img`
  height: 100%;
`;
const NavLinkImg = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 70%;
  cursor: pointer;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  @media screen and ((orientation: portrait) or (max-width: 900px)) {
    display: none;
  }
`;
const ThreeBars = styled(FaBars)`
  display: none;
  color: #808080;
  transition: 150ms;
  @media screen and ((orientation: portrait) or (max-width: 900px)) {
    display: block;
    font-size: 7vh;
    cursor: pointer;
  }
  &:hover {
    color: #2A74B5;
  }
`;
const NavLinkTxt = styled(NavLink)`
  color:rgb(155, 155, 155);
  font-size: 4vh;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4vh;
  height: 100%;
  cursor: pointer;
  transition: 150ms;
  &.active {
    color: black;
    box-sizing: border-box;
    border-bottom: 1.5vh solid black;
  }
  &:hover {
    color: #2A74B5;
    box-sizing: border-box;
    border-bottom: 1.5vh solid #2A74B5;
  }
`;
const SidebarNav = styled.nav`
  background: white;
  border-left: 2px solid black;
  width: 45vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => props.$isActive ? "0" : "-100%"};
  transition: 500ms;
  z-index: 200;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
const SidebarClose = styled.div`
  padding: 0 1.5vw;
  height: 12vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const CloseIconWrapper = styled.div`
  background: #2A74B5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 7vh;
  height: 7vh;
  transition: 150ms;
  &:hover {
    background:rgb(240, 47, 47);
  }
`;
const CloseIcon = styled(AiOutlineClose)`
  font-size: 4vh;
  color: white;
`;
const SidebarLink = styled(NavLink)`
  display: flex;
  color: rgb(155, 155, 155);
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 4vw;
  list-style: none;
  height: 4vh;
  text-decoration: none;
  font-size: 3vh;
  font-weight: 600;
  transition: 150ms;
  &.active {
    color: black;
    border-left: 1.5vh solid black;
    cursor: pointer;
  }
  &:hover {
    color: #2A74B5;
    border-left: 1.5vh solid #2A74B5;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin: 0;
  white-space: nowrap;
`;
const SidebarLogo = styled.div`
  margin-top: 2vh;
  margin-left: 4vw;
  padding-top: 4vh;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 8vh;
`;
const SidebarFooter = styled.div`
  margin-top: 2vh;
  margin-left: 4vw;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  font-size: 1.5vh;
  white-space: nowrap;
`;
const SidebarSocialMedia = styled.div`
  margin-top: 4vh;
  margin-left: 4vw;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  gap: 3vh;
  font-size: 5vh;
`;
const SidebarUrlLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;
function Navbar() {
  const [sidebar, setSitebar] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Nav, { children: [
    /* @__PURE__ */ jsxs(NavLinkImg, { to: "/", onClick: () => {
      setSitebar(false);
    }, children: [
      /* @__PURE__ */ jsx(StyledLogo, { src: graph, alt: "graph" }),
      /* @__PURE__ */ jsx(StyledLogo, { src: logo, alt: "logo" })
    ] }),
    /* @__PURE__ */ jsxs(NavMenu, { children: [
      /* @__PURE__ */ jsx(NavLinkTxt, { to: "/about", children: "About Us" }),
      /* @__PURE__ */ jsx(NavLinkTxt, { to: "/news", children: "News" }),
      /* @__PURE__ */ jsx(NavLinkTxt, { to: "/events", children: "Events" }),
      /* @__PURE__ */ jsx(NavLinkTxt, { to: "/contact", children: "Contact Us" })
    ] }),
    /* @__PURE__ */ jsx(ThreeBars, { onClick: () => {
      setSitebar((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx(SidebarNav, { $isActive: sidebar, children: /* @__PURE__ */ jsxs(SidebarWrap, { children: [
      /* @__PURE__ */ jsx(SidebarClose, { children: /* @__PURE__ */ jsx(CloseIconWrapper, { onClick: () => {
        setSitebar((prev) => !prev);
      }, children: /* @__PURE__ */ jsx(CloseIcon, {}) }) }),
      /* @__PURE__ */ jsx(SidebarLink, { to: "/about", onClick: () => {
        setSitebar((prev) => !prev);
      }, children: /* @__PURE__ */ jsx(SidebarLabel, { children: "About Us" }) }),
      /* @__PURE__ */ jsx(SidebarLink, { to: "/news", onClick: () => {
        setSitebar((prev) => !prev);
      }, children: /* @__PURE__ */ jsx(SidebarLabel, { children: "News" }) }),
      /* @__PURE__ */ jsx(SidebarLink, { to: "/events", onClick: () => {
        setSitebar((prev) => !prev);
      }, children: /* @__PURE__ */ jsx(SidebarLabel, { children: "Events" }) }),
      /* @__PURE__ */ jsx(SidebarLink, { to: "/contact", onClick: () => {
        setSitebar((prev) => !prev);
      }, children: /* @__PURE__ */ jsx(SidebarLabel, { children: "Contact Us" }) }),
      /* @__PURE__ */ jsx(SidebarLogo, { children: /* @__PURE__ */ jsx(StyledLogo, { src: logo, alt: "logo" }) }),
      /* @__PURE__ */ jsxs(SidebarFooter, { children: [
        "Cypriot Service Network of",
        /* @__PURE__ */ jsx("br", {}),
        " Mathematical Sciences in",
        /* @__PURE__ */ jsx("br", {}),
        " Industry and Innovation ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "© CY-MATHS-IN ",
        /* @__PURE__ */ jsx("br", {}),
        " All Rights Reserved"
      ] }),
      /* @__PURE__ */ jsxs(SidebarSocialMedia, { children: [
        /* @__PURE__ */ jsx(SidebarUrlLink, { href: "https://cy.linkedin.com/company/cymathsin", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(FaLinkedin, { color: "#0a66c2" }) }),
        /* @__PURE__ */ jsx(SidebarUrlLink, { href: "https://www.youtube.com/", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(FaYoutube, { color: "#FF0000" }) })
      ] })
    ] }) })
  ] }) });
}
const StyledFooter = styled.footer`
  background: rgb(255, 255, 255);
  border-top: 1px solid black;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 1.5vw;
  z-index: 100;
`;
const StyledImg = styled.img`
  height: 100%;
`;
const SocialMedia = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2vh;
  font-size: 4vh;
`;
const UrlLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;
function Footer() {
  return /* @__PURE__ */ jsxs(StyledFooter, { children: [
    /* @__PURE__ */ jsx(StyledImg, { src: graph, alt: "graph" }),
    /* @__PURE__ */ jsxs("span", { style: { fontSize: "1.7vh", textAlign: "center", whiteSpace: "nowrap" }, children: [
      "© CY-MATHS-IN ",
      /* @__PURE__ */ jsx("br", {}),
      " All Rights Reserved"
    ] }),
    /* @__PURE__ */ jsxs(SocialMedia, { children: [
      /* @__PURE__ */ jsxs(UrlLink, { href: "https://cy.linkedin.com/company/cymathsin", target: "_blank", rel: "noreferrer", children: [
        " ",
        /* @__PURE__ */ jsx(FaLinkedin, { color: "#0a66c2" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs(UrlLink, { href: "https://www.youtube.com/", target: "_blank", rel: "noreferrer", children: [
        " ",
        /* @__PURE__ */ jsx(FaYoutube, { color: "#FF0000" }),
        " "
      ] })
    ] })
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
function meta$4({}) {
  return [{
    title: "CY-MATHS-IN | Homepage"
  }, {
    name: "description",
    content: "Welcome to CY-MATHS-IN!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Homepage"
    }), /* @__PURE__ */ jsx("p", {
      children: "CY-MATHS-IN is a newly established national network of academics whose research lies in the broad field of mathematical sciences and are interested in collaborative projects with industry."
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function meta$3({}) {
  return [{
    title: "CY-MATHS-IN | About Us"
  }, {
    name: "description",
    content: "About Us"
  }];
}
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "About Us"
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [{
    title: "CY-MATHS-IN | News"
  }, {
    name: "description",
    content: "News"
  }];
}
const news = withComponentProps(function News() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "News"
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: news,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "CY-MATHS-IN | Events"
  }, {
    name: "description",
    content: "Events"
  }];
}
const events = withComponentProps(function Events() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Events"
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: events,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "CY-MATHS-IN | Contact Us"
  }, {
    name: "description",
    content: "Contact Us"
  }];
}
const contact = withComponentProps(function Contact() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Contact Us"
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    }), /* @__PURE__ */ jsx("p", {
      children: lorem.generateSentences(15)
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/cymathsin/assets/entry.client-Q4bsPDhU.js", "imports": ["/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/cymathsin/assets/root-gSQcvXDv.js", "imports": ["/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/with-props-B7a-wcBP.js"], "css": ["/cymathsin/assets/root-D7f0zPum.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/cymathsin/assets/home-CSDFzGux.js", "imports": ["/cymathsin/assets/with-props-B7a-wcBP.js", "/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/dummyText-PbTwWK4X.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/cymathsin/assets/about-CWUrhQbk.js", "imports": ["/cymathsin/assets/with-props-B7a-wcBP.js", "/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/dummyText-PbTwWK4X.js"], "css": [] }, "routes/news": { "id": "routes/news", "parentId": "root", "path": "news", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/cymathsin/assets/news-oQgFMNsg.js", "imports": ["/cymathsin/assets/with-props-B7a-wcBP.js", "/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/dummyText-PbTwWK4X.js"], "css": [] }, "routes/events": { "id": "routes/events", "parentId": "root", "path": "events", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/cymathsin/assets/events-Q7ug899Y.js", "imports": ["/cymathsin/assets/with-props-B7a-wcBP.js", "/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/dummyText-PbTwWK4X.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/cymathsin/assets/contact-oWqiOXL-.js", "imports": ["/cymathsin/assets/with-props-B7a-wcBP.js", "/cymathsin/assets/chunk-IR6S3I6Y-e5w63GhA.js", "/cymathsin/assets/dummyText-PbTwWK4X.js"], "css": [] } }, "url": "/cymathsin/assets/manifest-7fb48435.js", "version": "7fb48435" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/cymathsin/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/news": {
    id: "routes/news",
    parentId: "root",
    path: "news",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/events": {
    id: "routes/events",
    parentId: "root",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
