'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/api'
import { ActionUnits, Students } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
interface ActionUnitsProps extends ActionUnits {
  students: Students[]
}

export function SelectClass() {
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
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="classe" />
      </SelectTrigger>
      <SelectContent>
        {actionsUnits &&
          actionsUnits.map((actionUnit) => (
            <SelectItem key={actionUnit.id} value={actionUnit.id}>
              {actionUnit.actionName}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}

export function SelectAttendaceList({ day }: { day: string }) {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={day} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="P" className="text-emerald-500 font-bold">
          P
        </SelectItem>
        <SelectItem value="F" className="text-rose-600 font-bold">
          F
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
