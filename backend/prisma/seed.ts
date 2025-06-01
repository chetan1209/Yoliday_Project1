import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  const sampleProjects = [
    {
      title: 'Sample Project 1',
      description: 'This is a sample project description for project 1.',
      category: 'DESIGN',
      author: 'John Doe',
      image_url: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Project+1',
    },
    {
      title: 'Sample Project 2',
      description: 'This is a sample project description for project 2.',
      category: 'DEVELOPMENT',
      author: 'Jane Smith',
      image_url: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Project+2',
    },
    {
      title: 'Sample Project 3',
      description: 'This is a sample project description for project 3.',
      category: 'MARKETING',
      author: 'Peter Jones',
      image_url: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Project+3',
    },
  ];

  for (const p of sampleProjects) {
    const project = await prisma.project.create({
      data: p,
    });
    console.log(`Created project with id: ${project.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 