import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

// Cloudflare Worker fetch handler (for debugging/testing)
export async function fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  return new Response("This worker primarily runs scheduled jobs.", { status: 200 });
}

// Scheduled handler for cron jobs
export async function scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
  console.log(" [Cron Job] Starting event status update...");

  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const now = new Date();
    console.log(` Checking events before: ${now.toISOString()}`);

    const result = await prisma.events.updateMany({
      where: {
        EventStatus: false,
        EventDate: {
          lte: now,
        },
      },
      data: {
        EventStatus: true,
      },
    });

    console.log(` [Cron Job] Updated ${result.count} events.`);
  } catch (error) {
    console.error(" [Cron Job] Error updating events:", error instanceof Error ? error.message : String(error));
  } finally {
    await prisma.$disconnect();
  }
}
