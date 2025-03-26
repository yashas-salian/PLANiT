// backend/src/workers/eventStatusUpdater.ts

import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
  // Add any environment variables you need
  DATABASE_URL: "postgresql://neondb_owner:npg_mrEflpXo5cZ3@ep-fancy-meadow-a5rl7chp-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";
}



export default {
  // Cron trigger that runs daily at midnight UTC
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<Response> {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL	,
    }).$extends(withAccelerate());
    try {
      console.log('Running event status update job');
      
      // Use Prisma to update all events with status=false and startDate in the past
      const result = await prisma.events.updateMany({
        where: {
          EventStatus: false,
          EventDate: {
            lte: new Date()
          }
        },
        data: {
            EventStatus: true
        }
      });
      
      console.log(`Successfully updated ${result.count} events`);
      return new Response(`Updated ${result.count} events`, { status: 200 });
    } catch (error) {
      console.error('Error in event status update job:', error instanceof Error ? error.message : String(error));
      return new Response('Error updating events: ' + (error instanceof Error ? error.message : String(error)), { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  }
};