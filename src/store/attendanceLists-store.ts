import { prisma } from '@/services/database/prisma'
import { AttendanceList } from '@prisma/client'
import { create } from 'zustand'

interface AttendanceListState {
  attendanceLists: AttendanceList[]
  add: (newAttendanceList: Omit<AttendanceList, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<AttendanceList | null>
  update: (id: string, data: Partial<AttendanceList>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const attendanceListStore = create<AttendanceListState>((set) => {
  return {
    attendanceLists: [],

    add: async (newAttendanceList) => {
      try {
        const createdAttendanceList = await prisma.attendanceList.create({
          data: newAttendanceList,
        })
        set((state) => ({
          attendanceLists: [...state.attendanceLists, createdAttendanceList],
        }))
      } catch (error) {
        console.error('Erro ao adicionar lista de presença:', error)
      }
    },

    getAll: async () => {
      try {
        const allAttendanceLists = await prisma.attendanceList.findMany()
        set({ attendanceLists: allAttendanceLists })
      } catch (error) {
        console.error('Erro ao obter todas as listas de presença:', error)
      }
    },

    getById: async (id) => {
      try {
        const attendanceList = await prisma.attendanceList.findUnique({
          where: { id },
        })
        return attendanceList
      } catch (error) {
        console.error('Erro ao obter lista de presença por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.attendanceList.update({
          where: { id },
          data,
        })
        await attendanceListStore.getState().getAll() // Atualiza a lista de listas de presença após a atualização
      } catch (error) {
        console.error('Erro ao atualizar lista de presença:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.attendanceList.delete({
          where: { id },
        })
        await attendanceListStore.getState().getAll() // Atualiza a lista de listas de presença após a exclusão
      } catch (error) {
        console.error('Erro ao excluir lista de presença:', error)
      }
    },
  }
})
