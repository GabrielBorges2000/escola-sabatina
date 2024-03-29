import prisma from '@/services/database/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const students = await prisma.students.findMany({
    include: {
      ActionUnits: true,
    },
  })

  return NextResponse.json({ students })
}

// export async function POST(req: Request) {
//   const students = await prisma.students.findMany({
//     include: {
//       ActionUnits: true,
//     },
//   })

//   return NextResponse.json({ students })
// }
