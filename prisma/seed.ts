// eslint-disable-next-line @typescript-eslint/no-require-imports
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const project = await prisma.project.create({});

    console.log('Seeding completed successfully');
    console.log("Created project:", project.id);

}

    main()
        .catch((e) => {
            console.error(e);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
