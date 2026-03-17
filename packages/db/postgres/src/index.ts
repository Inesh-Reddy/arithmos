// export { prisma } from "./client.js";
// export * from "../generated/prisma/client.js";
import { prisma } from "./client.js";

export { prisma };

// optional: expose Prisma types safely
export * as PrismaTypes from "../generated/prisma/client.js";
