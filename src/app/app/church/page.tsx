import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ChurchIcon } from 'lucide-react'

export default function Church() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <ChurchIcon className="h-6 w-6" />
        <h1 className="font-semibold text-lg md:text-2xl">
          IASD JD São Judas Tadeu
        </h1>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sobre</CardTitle>
            <CardDescription>
              Essas são as informações da igreja que irá aparecer para cada
              usuário.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 md:grid-cols-[200px_1fr]">
              <label
                className="flex items-center text-sm font-medium peer-justify-self-end"
                htmlFor="name"
              >
                Name
              </label>
              <Input id="name" placeholder="Nome da igreja" />
              <label
                className="flex items-center text-sm font-medium peer-justify-self-end"
                htmlFor="phone"
              >
                Telefone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Telefone para contato"
              />
              <label
                className="flex items-center text-sm font-medium peer-justify-self-end"
                htmlFor="andress"
              >
                Endereço
              </label>
              <Input id="andress" placeholder="Endereço da igreja" />
            </form>
          </CardContent>
          <CardFooter className="border-t p-6">
            <Button type="submit">Salvar</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Segurança</CardTitle>
            <CardDescription>Atualizar senha de usuário</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 md:grid-cols-[200px_1fr]">
              <label
                className="flex items-center text-sm font-medium peer-justify-self-end"
                htmlFor="password"
              >
                Nova senha
              </label>
              <Input id="password" type="password" />
              <label
                className="flex items-center text-sm font-medium peer-justify-self-end"
                htmlFor="confirm-password"
              >
                Confirmar senha
              </label>
              <Input id="confirm-password" type="password" />
            </form>
          </CardContent>
          <CardFooter className="border-t p-6">
            <Button type="submit">Salvar</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Excluir</CardTitle>
            <CardDescription>
              Solicite a remoção da conta. Atenção após a solitação ser aprovada
              por um dos nossos administradores não será mais possível recuperar
              os dados e você terá que solicitar um novo cadastro da igreja,
              classes, alunos e eventos.{' '}
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t p-6">
            <Button type="submit" variant="destructive">
              Excluir
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
