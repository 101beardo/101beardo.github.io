import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { projectsData, getProjectBySlug } from '../../../data/projects';
import CaseStudyContent from './CaseStudyContent';

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found | Tarun Sharma' };
  }
  return {
    title: `${project.title} | Case Study | Tarun Sharma`,
    description: project.caseStudy.overview,
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyContent project={project} />
      </main>
      <Footer />
    </>
  );
}
