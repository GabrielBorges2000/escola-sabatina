import { prisma } from '@/services/database/prisma'
import { Students } from '@prisma/client'
import { create } from 'zustand'

interface StudentsState {
  students: Students[]
  add: (newStudent: Omit<Students, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<Students | null>
  update: (id: string, data: Partial<Students>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const studentStore = create<StudentsState>((set) => {
  return {
    students: [],

    add: async (newStudent) => {
      try {
        const createdStudent = await prisma.students.create({
          data: newStudent,
        })
        set((state) => ({
          students: [...state.students, createdStudent],
        }))
      } catch (error) {
        console.error('Erro ao adicionar estudante:', error)
      }
    },

    getAll: async () => {
      try {
        const allStudents = await prisma.students.findMany()
        set({ students: allStudents })
      } catch (error) {
        console.error('Erro ao obter todos os estudantes:', error)
      }
    },

    getById: async (id) => {
      try {
        const student = await prisma.students.findUnique({
          where: { id },
        })
        return student
      } catch (error) {
        console.error('Erro ao obter estudante por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.students.update({
          where: { id },
          data,
        })
        await studentStore.getState().getAll() // Atualiza a lista de estudantes após a atualização
      } catch (error) {
        console.error('Erro ao atualizar estudante:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.students.delete({
          where: { id },
        })
        await studentStore.getState().getAll() // Atualiza a lista de estudantes após a exclusão
      } catch (error) {
        console.error('Erro ao excluir estudante:', error)
      }
    },
  }
})
