import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectClass() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="classe" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="amigos">amigos</SelectItem>
        <SelectItem value="visitas">visitas</SelectItem>
        <SelectItem value="discipulados">discipulados</SelectItem>
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
