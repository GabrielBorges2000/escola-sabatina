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
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
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
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
    },
  })

  return NextResponse.json({ actionUnit })
}

export async function PUT(req: NextRequest) {

  const body = await req.json()

  const actionUnitsBodySchema = z.object({
    id: z.string(),
    actionName: z.string(),
    teacherName: z.string(),
    assistantTeacherName: z.string(),
    secretaryName: z.string(),
  })

  const { id, teacherName, assistantTeacherName, actionName, secretaryName } = actionUnitsBodySchema.parse(body)


  const unit = await prisma.actionUnits.findMany({
    where: {
      id,
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
    },
  })

  if (unit.length === 0) {
    return NextResponse.json({ message: 'Action Unit not found' })
  }

  const actionUnit = await prisma.actionUnits.update({
    where: {
      id,
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
    },
    data: {
      actionName,
      teacherName,
      assistantTeacherName,
      secretaryName,
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
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
