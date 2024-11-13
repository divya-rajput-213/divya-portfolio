import AboutContent from "@/app/components/AboutContent";
import ProfileContent from "@/app/components/ProfileContent";
import Skills from "@/app/components/SkillContent";
import { notFound } from "next/navigation"; 

const content = {
  about: {
    component: <AboutContent />,
  },
  profile: {
    component: <ProfileContent />,
  },
  skills: {
    component: <Skills />,
  },
};

const PortfolioPage = ({ params }) => {
  const { slug } = params;

  if (!content[slug]) {
    notFound();
  }

  const { component } = content[slug];

  return (
    <>{component}</>
  );
};

export default PortfolioPage;
