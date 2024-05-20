import Users from '@/server/controllers/user';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newUser = await Users.create(data);
  return NextResponse.json(newUser);
}
