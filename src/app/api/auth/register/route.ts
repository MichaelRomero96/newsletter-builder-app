import Users from '@/server/controllers/users';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  await Users.create(data);
}
