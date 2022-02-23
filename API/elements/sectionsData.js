import Features from "../../src/components/Features";
import Portfolio from "../../src/components/Portfolio";
import Blogs from "../../src/components/Blogs";
import Contact from "../../src/components/Contact";
import Resume from "../../src/components/Resume";

export const SectionsData = () => [
    {
        id: 1,
        title: "what I do",
        subtitle: "features",
        align: "left",
        component: <Features/>
    },
    {
        id: 2,
        title: "My Portfolio",
        subtitle: "Visit my portfolio and keep your feedback",
        align: "center",
        component: <Portfolio />
    },
    {
        id: 3,
        title: "My Resume",
        subtitle: "7+ Years of Experience",
        align: "center",
        component: <Resume />
    },
    {
        id: 4,
        title: "My Blog",
        subtitle: "Visit my blog and keep your feedback",
        align: "center",
        component: <Blogs />
    },
    {
        id: 5,
        title: "Contact With Me",
        subtitle: "contact",
        align: "center",
        component: <Contact />
    }
]
