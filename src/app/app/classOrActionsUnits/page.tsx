import { SendToBack } from 'lucide-react'
import { TableClass, TableRowStudent } from '@/components/table-class'
import ModalAddClass from '@/components/modal-add-class'

export default function ClassOrActionsUnits() {
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
        <TableClass nameWhithClass="Amigo" teacherWhithClass="Gabriel Borges">
          <TableRowStudent
            id="001"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="002"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="003"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="004"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
        </TableClass>
        <TableClass nameWhithClass="Visitante" teacherWhithClass="John Joe">
          <TableRowStudent
            id="001"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="002"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="003"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="004"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
        </TableClass>
        <TableClass
          nameWhithClass="Discipulado"
          teacherWhithClass="Eder Foster"
        >
          <TableRowStudent
            id="001"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="002"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="003"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
          <TableRowStudent
            id="004"
            name="Gabriel Borges"
            phone="(11) 98623-7504"
            email="teste@example.com"
          />
        </TableClass>
      </div>
    </div>
  )
}
