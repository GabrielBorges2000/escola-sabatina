import prisma from '@/services/database/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET() {
  const students = await prisma.students.findMany({
    where: {
      churchId: 'clvfc9g9l0000ay4eyj4itbfn'
    },
    include: {
      ActionUnits: true,
    },
  })

  return NextResponse.json({ students })
}

export async function POST(req: NextRequest) {
  const actionUnitsBodySchema = z.object({
    name: z.string(),
    churchId: z.string(),
    actionUnitsId: z.string(),
    contact: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
  })

  const { actionUnitsId, name, churchId, contact, email, image } =
    actionUnitsBodySchema.parse(await req.json())

  const hasStudent = await prisma.students.findMany({
    where: {
      actionUnitsId,
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
    },
  })

  if (hasStudent.length > 0) {
    return NextResponse.json({
      message: 'Action Unit already exists',
    })
  }

  const Student = await prisma.students.create({
    data: {
      name,
      actionUnitsId,
      contact: contact || null,
      email: email || null,
      image: image || null,
      churchId: 'clvfc9g9l0000ay4eyj4itbfn',
    },
  })

  return NextResponse.json({ Student })
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
