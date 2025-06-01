import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface GetProjectsParams {
  page?: number;
  limit?: number;
}

export const getProjects = async ({ page = 1, limit = 10 }: GetProjectsParams) => {
  const skip = (page - 1) * limit;

  const [projects, totalProjects] = await prisma.$transaction([
    prisma.project.findMany({
      skip: skip,
      take: limit,
    }),
    prisma.project.count(),
  ]);

  return {
    projects,
    totalProjects,
    page,
    limit,
  };
};

// You can add other service functions here (create, update, delete, etc.) 