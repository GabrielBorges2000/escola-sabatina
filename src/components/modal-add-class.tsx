'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import colors from 'tailwindcss/colors'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
// import { SelectClass } from './selects'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { queryClient } from '@/lib/query-client'
import { useMutation } from '@tanstack/react-query'

const actionUnitsBodySchema = z.object({
  actionName: z.string(),
  teacherName: z.string(),
  assistantTeacherName: z.string(),
  secretaryName: z.string(),
})

type actionUnitsBodySchemaProps = z.infer<typeof actionUnitsBodySchema>

export default function ModalAddClass() {
  const { toast } = useToast()
  const form = useForm<actionUnitsBodySchemaProps>({
    values: {
      actionName: '',
      teacherName: '',
      assistantTeacherName: '',
      secretaryName: '',
    },
  })

  const handleCreateClass = form.handleSubmit(async (data) => {
    const { actionName, teacherName, assistantTeacherName, secretaryName } =
      actionUnitsBodySchema.parse(data)

    try {
      const actionUnit = await fetch('/api/actionUnits', {
        method: 'POST',
        body: JSON.stringify({
          actionName,
          teacherName,
          assistantTeacherName: assistantTeacherName || '',
          secretaryName,
        }),
      })

      console.log(await actionUnit.json())

      if (!actionUnit) {
        throw new Error('Não foi possível criar a unidade de ação')
      }

      toast({
        title: 'Sucesso!',
        description: 'Classe Criada com sucesso.',
      })
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Ocorreu um erro ao tentar criar a classe.',
        variant: 'destructive',
      })
    }
  })

  const { mutateAsync: CreateClass } = useMutation({
    mutationFn: handleCreateClass,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['actions-units'] })
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-emerald-500 hover:bg-emerald-600 text-white hover:text-white font-bold"
        >
          <Plus className="w-4 h-4 mr-1" strokeWidth={3} color={colors.white} />{' '}
          Classe
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-11/12 rounded-md md:w-full">
        <DialogHeader>
          <DialogTitle>Nova Classe</DialogTitle>
          <DialogDescription>
            Preencha as informações da nova classe com nome da classse e o
            professor e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={CreateClass}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nameWhithClass" className="text-right">
                Nome da Classe
              </Label>
              <Input
                {...form.register('actionName', { required: true })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="teacher" className="text-right">
                Professor
              </Label>
              <Input
                {...form.register('teacherName', { required: true })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assintentTeacher" className="text-right">
                Professor Auxiliar
              </Label>
              <Input
                {...form.register('assistantTeacherName', { required: true })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="secretary" className="text-right">
                Secretária
              </Label>
              <Input
                {...form.register('secretaryName', { required: true })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="flex-1 flex justify-end items-end">
            <div className="flex gap-2">
              <DialogTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button type="submit">Salvar</Button>
              </DialogTrigger>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
