'use client'
import { Users, Search, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import CardStudent from '@/components/card-studant'
import { SelectClass } from '@/components/selects'
import colors from 'tailwindcss/colors'
import { Button } from '@/components/ui/button'
import { ModalAddStudent } from '@/components/modall-add-students'
import prisma from '@/services/database/prisma'

import { ActionUnits, Students } from '@prisma/client'
import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export interface StudentsProps extends Students {
  ActionUnits: ActionUnits
}

export default function Students() {

  async function getStudents(): Promise<StudentsProps[]> {
    try {
      const response = await api('/api/students')

      const { students } = await response.json()

      return students
    } catch (error) {
      console.error('Erro ao buscar cards:', error)
      return []
    }
  }

  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  })

  console.log(students)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="w-full flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="font-semibold text-lg md:text-2xl">Alunos</h1>
        </div>

        <ModalAddStudent variant="add">
          <Button
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600 text-white hover:text-white font-bold"
          >
            <Plus
              className="w-4 h-4 mr-1"
              strokeWidth={3}
              color={colors.white}
            />{' '}
            Aluno
          </Button>
        </ModalAddStudent>
      </div>
      <form className="md:ml-auto flex gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
            placeholder="nome"
          />
        </div>
        <SelectClass />
      </form>
      <div className="grid gap-4 mt-4">
        {students && students.map((student) => (
          <CardStudent
            key={student.id}
            name={student.name}
            nameWhithClass={student.ActionUnits.actionName}
          />
        ))}
      </div>
    </div>
  )
}
