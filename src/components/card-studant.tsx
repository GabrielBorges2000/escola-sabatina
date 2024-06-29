import { StudentsProps } from '@/app/app/students/page'
import { ModalRemoveStudent } from './modal-remove-students'
import { ModalAddStudent } from './modall-add-students'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

interface CardStudentProps {
  name: string
  nameWhithClass: string
}

export default function CardStudent({
  name = '',
  nameWhithClass = '',
}: CardStudentProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div>
          <div>
            <div className="flex items-center space-x-4 py-3 px-4">
              <div className="flex-1 min-w-0">
                <div className="font-bold">{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate-2-lines">
                  {nameWhithClass}
                </div>
              </div>
              <div className="flex gap-2">
                <ModalAddStudent variant="edit">
                  <Button size="sm" variant="outline">
                    Detalhes
                  </Button>
                </ModalAddStudent>
                <ModalRemoveStudent />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
