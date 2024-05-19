import db from '../../src/server/services/db';

describe('DB', () => {
  it('should establish a connection to the database', async () => {
    await db.$queryRaw`SELECT 1`;
  });
});
