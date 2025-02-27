import ProjectItem from './project-item';

function ProjectsSection() {
  const projects = [
    {
      title: 'Project 1',
      description:
        'A brief description of Project 1 and what technologies were used.',
      technologies: [
        {
          name: 'React',
          colorClass:
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
        },
        {
          name: 'Node.js',
          colorClass:
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
        },
      ],
    },
    {
      title: 'Project 2',
      description:
        'A brief description of Project 2 and what technologies were used.',
      technologies: [
        {
          name: 'Next.js',
          colorClass:
            'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
        },
        {
          name: 'TypeScript',
          colorClass:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
        },
      ],
    },
    {
      title: 'Project 3',
      description:
        'A brief description of Project 3 and what technologies were used.',
      technologies: [
        {
          name: 'Vue.js',
          colorClass:
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
        },
        {
          name: 'Firebase',
          colorClass:
            'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
        },
      ],
    },
  ];

  return (
    <section className="min-h-[100dvh] pb-6 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl italic font-black text-center mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
