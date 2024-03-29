import prisma from '@/services/database/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET() {
  const actionsUnits = await prisma.actionUnits.findMany({
    include: {
      students: true,
    },
  })

  return NextResponse.json({ actionsUnits })
}

export async function POST(req: NextRequest) {
  const actionUnitsBodySchema = z.object({
    actionName: z.string(),
    teacherName: z.string(),
    assistantTeacherName: z.string(),
    secretaryName: z.string(),
  })

  const { actionName, teacherName, assistantTeacherName, secretaryName } =
    actionUnitsBodySchema.parse(await req.json())

  const hasActionUnit = await prisma.actionUnits.findMany({
    where: {
      actionName,
      churchId: 'clu7x4bs50000zoxbpbzj02t3',
    },
  })

  if (hasActionUnit.length > 0) {
    return NextResponse.json({
      message: 'Action Unit already exists',
    })
  }

  const actionUnit = await prisma.actionUnits.create({
    data: {
      actionName,
      teacherName,
      assistantTeacherName,
      secretaryName,
      churchId: 'clu7x4bs50000zoxbpbzj02t3',
    },
  })

  return NextResponse.json({ actionUnit })
}
export async function DELETE(req: NextRequest) {
  const actionUnitsBodySchema = z.object({
    id: z.string().cuid(),
  })

  const { id } = actionUnitsBodySchema.parse(await req.json())

  await prisma.actionUnits.delete({
    where: {
      id,
    },
  })

  return NextResponse.json({ message: 'Action Unit deleted' })
}
