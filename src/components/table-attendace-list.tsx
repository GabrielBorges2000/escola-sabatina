import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

import { ReactNode } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SelectAttendaceList } from './selects'

export interface TableClassProps {
  nameWhithClass: string
  teacherWhithClass: string
  children: ReactNode
}

export function TableAttendaceList({
  nameWhithClass,
  teacherWhithClass,
  children,
}: TableClassProps) {
  return (
    <Card className="p-4 overflow-x-auto w-full">
      <CardHeader className="border-b">
        <div className="flex justify-between space-x-2">
          <div>
            <CardTitle>{nameWhithClass}</CardTitle>
            <CardDescription>{teacherWhithClass}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Trimestre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1º Trimestre</SelectItem>
                <SelectItem value="2">2º Trimestre</SelectItem>
                <SelectItem value="3">3º Trimestre</SelectItem>
                <SelectItem value="4">4º Trimestre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 md:p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              {Array.from({ length: 14 }, (_, index) => index + 1).map((i) => (
                <TableHead className="text-center" key={i}>
                  {i}º
                </TableHead>
              ))}
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

interface TableRowStudentProps {
  name: string
}

export function TableRowAttendaceList({ name }: TableRowStudentProps) {
  return (
    <TableRow>
      <TableCell className="font-semibold">{name}</TableCell>
      {Array.from({ length: 14 }, (_, index) => index + 1).map((i) => (
        <TableCell key={i}>
          <SelectAttendaceList day={`${i}º`} />
        </TableCell>
      ))}
      <TableCell>
        <p className="font-bold text-center text-md">10</p>
      </TableCell>
    </TableRow>
  )
}
