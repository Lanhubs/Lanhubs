import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineDesktop,
  AiOutlineAndroid,
  AiOutlineCloudServer,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const contactLinks = [
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/lanre-muh-d-71a721227/",
    name: "linkedIn",
  },
  {
    icon: <AiOutlineWhatsApp />,
    link: "https://wa.me/+2348108685989",
    name: "whatsapp",
  },
  {
    icon: <AiOutlineMail />,
    link: "muhammedolanrewaju56@gmail.com",
    name: "gmail",
  },
  {
    icon: <AiOutlineGithub />,
    link: "https://github.com/Lanhubs",
    name: "Github",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/Habeebllahi8",
    name: "twitter",
  },
  {
    icon: <AiFillFacebook />,
    name: "facebook",
    link: "https://www.facebook.com/habeeb.muhammad.758/",
  },
];

const skills = [
  {
    icon: <AiOutlineDesktop />,
    about:
      "Building well customized web applications both in the frontend \
       and integerating custom made APIs from ground up using various technologies",
    skill: "Web development",
  },
  {
    icon: <AiOutlineAndroid />,
    about:
      "Creating cross-platform and fully customized Mobile applications in React Native",
    skill: "Mobile app development",
  },
  {
    icon: <AiOutlineCloudServer />,
    about:
      "Making backend APIs for both web applications and Mobile applications or any other sort of solution",
    skill: "Backend development",
  },
  {
    icon: <AiOutlineDesktop />,
    about:
      "Embraces teaching or breeding the next generation developers in web development",
    skill: "Web development tutor",
  },
];

export { contactLinks, skills };
