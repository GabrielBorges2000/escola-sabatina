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
import { Input } from '@/components/ui/input'
import { SelectClass } from './selects'
import { ReactNode } from 'react'

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

interface ModalAddStudent {
  children: ReactNode
  variant: 'add' | 'edit'
}

export function ModalAddStudent({
  children,
  variant = 'add',
}: ModalAddStudent) {

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
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-11/12 rounded-md md:w-full">
        <DialogHeader>
          <DialogTitle>
            {variant === 'add' ? 'Novo Aluno' : 'Aluno'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'add'
              ? ' Preencha as informações do aluno, selecione a classe que ele irá participar e clique em salvar.'
              : 'Edite as informações do aluno e clique em salvar.'}
          </DialogDescription>
        </DialogHeader>
        <form className="">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Telefone" className="text-right">
                Telefone
              </Label>
              <Input id="Telefone" type="tel" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Classe
              </Label>
              <SelectClass />
            </div>
          </div>
          <DialogFooter className="flex-1 flex justify-end items-end">
            <div className="flex gap-2">
              <Button type="submit" variant="outline">
                Canelar
              </Button>
              <Button type="submit">SaLvar</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
