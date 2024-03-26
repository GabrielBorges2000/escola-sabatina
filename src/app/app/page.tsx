import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import {
  UserCheckIcon,
  FileEditIcon,
  BookIcon,
  CheckCircleIcon,
  AwardIcon,
  UsersIcon,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export default function Home() {
  return (
    <Tabs defaultValue="cards" className="">
      <TabsList className="ml-6 md:ml-8">
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="progress">Progresso</TabsTrigger>
      </TabsList>
      <TabsContent value="cards">
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <UserCheckIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Presenças</CardTitle>
                  <CardDescription>
                    Exibe o número total de alunos presentes.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                350
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BookIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Progresso nas Lições</CardTitle>
                  <CardDescription>
                    Mostra a porcentagem média de conclusão das lições.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                75%
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircleIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Desafios Concluídos</CardTitle>
                  <CardDescription>
                    Exibe o número total de desafios concluídos.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                125
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <AwardIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Licenças Adquiridas</CardTitle>
                  <CardDescription>
                    Mostra o número total de licenças compradas.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                50
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <UsersIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Total de Alunos</CardTitle>
                  <CardDescription>
                    Exibe o número total de alunos registrados.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                500
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <UsersIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Total de Turmas</CardTitle>
                  <CardDescription>
                    Exibe o número total de turmas disponíveis.
                  </CardDescription>
                </div>
                <div className="gap-2 ml-auto">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-32">
                25
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="progress">
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Presences</CardTitle>
                <CardDescription className="ml-auto">Students</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-4xl font-semibold">78%</div>
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <div>Present</div>
                      <div className="ml-auto font-semibold">25</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <div>Present</div>
                      <div className="ml-auto font-semibold">25</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <div>Present</div>
                      <div className="ml-auto font-semibold">25</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <div>Present</div>
                      <div className="ml-auto font-semibold">25</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="grid gap-4">
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Lessons Completed</CardTitle>
                <CardDescription className="ml-auto">Students</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center">
                    <div>Introduction to Math</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={25}
                    />
                    <div className="font-semibold">25%</div>
                  </div>
                  <div className="flex items-center">
                    <div>History of Science</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={50}
                    />
                    <div className="font-semibold">50%</div>
                  </div>
                  <div className="flex items-center">
                    <div>Art and Culture</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={75}
                    />
                    <div className="font-semibold">75%</div>
                  </div>
                  <div className="flex items-center">
                    <div>Language and Literature</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={100}
                    />
                    <div className="font-semibold">100%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="grid gap-4">
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Challenges Completed</CardTitle>
                <CardDescription className="ml-auto">Students</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center">
                    <div>Math Puzzles</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={25}
                    />
                    <div className="font-semibold">25%</div>
                  </div>
                  <div className="flex items-center">
                    <div>Science Quiz</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={50}
                    />
                    <div className="font-semibold">50%</div>
                  </div>
                  <div className="flex items-center">
                    <div>Art Challenge</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={75}
                    />
                    <div className="font-semibold">75%</div>
                  </div>
                  <div className="flex items-center">
                    <div>Language Test</div>
                    <Progress
                      className="ml-auto w-24 h-2 rounded-full"
                      value={100}
                    />
                    <div className="font-semibold">100%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Acquired Licenses</CardTitle>
                <CardDescription className="ml-auto">Students</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center">
                    <div>Python Programming</div>
                    <div className="ml-auto font-semibold">25</div>
                  </div>
                  <div className="flex items-center">
                    <div>Web Development</div>
                    <div className="ml-auto font-semibold">25</div>
                  </div>
                  <div className="flex items-center">
                    <div>Data Science</div>
                    <div className="ml-auto font-semibold">25</div>
                  </div>
                  <div className="flex items-center">
                    <div>Machine Learning</div>
                    <div className="ml-auto font-semibold">25</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Total Students</CardTitle>
                <CardDescription className="ml-auto">Students</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-semibold">500</div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center border-b">
                <CardTitle>Total Classes</CardTitle>
                <CardDescription className="ml-auto">Classes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-semibold">25</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
