'use client'
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

import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { ReactNode } from 'react'
import { useToast } from '@/components/ui/use-toast'

import { queryClient } from '@/lib/query-client'
import { useMutation } from '@tanstack/react-query'

export interface TableClassProps {
  nameWhithClass: string
  teacherWhithClass: string
  children: ReactNode
  idClasses: string
}

export function TableClass({
  nameWhithClass,
  teacherWhithClass,
  children,
  idClasses: id,
}: TableClassProps) {
  const { toast } = useToast()
  async function handleDeleteClass(id: string) {
    try {
      await fetch('/api/actionUnits', {
        method: 'DELETE',
        body: JSON.stringify({
          id,
        }),
      })

      toast({
        title: 'Sucesso!',
        description: 'Classe Deletada com sucesso.',
      })
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Ocorreu um erro ao deletar esta classe.',
        variant: 'destructive',
      })
    }
  }

  const { mutateAsync: DeleteClass } = useMutation({
    mutationFn: handleDeleteClass,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['actions-units'] })
    },
  })

  return (
    <Card className="p-4 overflow-x-auto w-full">
      <CardHeader className="border-b">
        <div className="flex justify-between">
          <div>
            <CardTitle>{nameWhithClass}</CardTitle>
            <CardDescription>{teacherWhithClass}</CardDescription>
          </div>
          <div className="flex gap-2">
            {/* <Button size="sm" variant="outline">
              <Pencil className="w-4 h-4" />
            </Button> */}
            <Button
              size="sm"
              variant="destructive"
              onClick={() => DeleteClass(id)}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 md:p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

interface TableRowStudentProps {
  id: string
  name: string
  phone: string
  email: string
}

export function TableRowStudent({
  id,
  name,
  phone = '',
  email = '',
}: TableRowStudentProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          {/* <Button size="sm" variant="outline">
            <Pencil className="w-4 h-4" />
          </Button> */}
          {/* <Button size="sm" variant="destructive">
            <Trash className="w-4 h-4" />
          </Button> */}
        </div>
      </TableCell>
    </TableRow>
  )
}
