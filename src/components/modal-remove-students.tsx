import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'

export function ModalRemoveStudent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <Trash className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-11/12 rounded-md md:w-full">
        <DialogHeader>
          <DialogTitle>Remover</DialogTitle>
          <DialogDescription>
            VocÊ realmente deseja fazer está ação? Será necessário cadastrar o
            aluno novamente.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-1 flex justify-end items-end">
          <div className="flex gap-2">
            <Button type="submit" variant="outline">
              Canelar
            </Button>
            <Button type="submit">SaLvar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
