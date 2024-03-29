'use client'
import { SendToBack } from 'lucide-react'
import { TableClass, TableRowStudent } from '@/components/table-class'
import ModalAddClass from '@/components/modal-add-class'
import { ActionUnits, Students } from '@prisma/client'
import { api } from '@/lib/api'

import { useQuery } from '@tanstack/react-query'
interface ActionUnitsProps extends ActionUnits {
  students: Students[]
}

export default function ClassOrActionsUnits() {
  async function getActionUnits(): Promise<ActionUnitsProps[]> {
    try {
      const response = await api('/api/actionUnits')

      const { actionsUnits } = await response.json()

      return actionsUnits
    } catch (error) {
      console.error('Erro ao buscar cards:', error)
      return []
    }
  }

  const { data: actionsUnits } = useQuery({
    queryKey: ['actions-units'],
    queryFn: getActionUnits,
  })

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="w-full flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <SendToBack className="h-6 w-6" />
          <h1 className="font-semibold text-lg md:text-2xl">
            Classes/Unidades de Ação
          </h1>
        </div>
        <ModalAddClass />
      </div>
      <div className="grid gap-6">
        {actionsUnits &&
          actionsUnits.map(({ actionName, teacherName, id, students }) => (
            <TableClass
              nameWhithClass={actionName}
              teacherWhithClass={teacherName}
              key={id}
              idClasses={id}
            >
              {students?.map((student, index) => (
                <TableRowStudent
                  key={student.id}
                  id={String(index + 1)}
                  name={student.name}
                  phone={student.contact || ''}
                  email={student.email || ''}
                />
              ))}
            </TableClass>
          ))}
      </div>
    </div>
  )
}
