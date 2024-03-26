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

export default function ModalAddClass() {
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
        <form className="">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nameWhithClass" className="text-right">
                Nome da Classe
              </Label>
              <Input id="nameWhithClass" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="teacher" className="text-right">
                Professor
              </Label>
              <Input id="teacher" type="tel" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assintentTeacher" className="text-right">
                Professor Auxiliar
              </Label>
              <Input
                id="assintentTeacher"
                type="email"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="secretary" className="text-right">
                Secretária
              </Label>
              <Input id="secretary" type="email" className="col-span-3" />
            </div>
          </div>
          <DialogFooter className="flex-1 flex justify-end items-end">
            <div className="flex gap-2">
              <Button type="submit" variant="outline">
                Cancelar
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
