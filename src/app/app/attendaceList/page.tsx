import { LayoutList } from 'lucide-react'
import {
  TableAttendaceList,
  TableRowAttendaceList,
} from '@/components/table-attendace-list'

export default function AttendaceList() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="w-full flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <LayoutList className="h-6 w-6" />
          <h1 className="font-semibold text-lg md:text-2xl">
            Lista de chamada
          </h1>
        </div>
      </div>
      <div className="grid gap-6">
        <TableAttendaceList
          nameWhithClass="Amigo"
          teacherWhithClass="Gabriel Borges"
        >
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
        </TableAttendaceList>
        <TableAttendaceList
          nameWhithClass="Visitante"
          teacherWhithClass="John Joe"
        >
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
        </TableAttendaceList>
        <TableAttendaceList
          nameWhithClass="Discipulado"
          teacherWhithClass="Eder Foster"
        >
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
          <TableRowAttendaceList name="Gabriel Borges" />
        </TableAttendaceList>
      </div>
    </div>
  )
}
