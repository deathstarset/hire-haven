const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const jobs = path.resolve(__dirname, "jobs.json");
const companies = path.resolve(__dirname, "companies.json");
const categories = path.resolve(__dirname, "categories.json");
const skills = path.resolve(__dirname, "skills.json");
const tables = [{ filePath: jobs, tableName: prisma.job, name: "Jobs" }];
// expect an array of filepaths and tablenames
async function populateTable(tables) {
  for (const table of tables) {
    console.log(table);
    const data = JSON.parse(fs.readFileSync(table.filePath, "utf-8"));
    await table.tableName.createMany({ data: data });
    console.log(`${table.name} added succefully`);
  }
}

async function exec() {
  const data = await prisma.category.findMany({ select: { id: true } });
  console.log(data);
}

function populate() {
  populateTable(tables)
    .catch((err) => {
      console.log(err);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

function execute() {
  exec()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

populate();
