import { prisma } from '@/services/database/prisma'
import { Church } from '@prisma/client'
import { create } from 'zustand'

interface ChurchState {
  churches: Church[]
  add: (newChurch: Omit<Church, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<Church | null>
  update: (id: string, data: Partial<Church>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const churchStore = create<ChurchState>((set) => {
  return {
    churches: [],

    add: async (newChurch) => {
      try {
        const createdChurch = await prisma.church.create({
          data: newChurch,
        })
        set((state) => ({
          churches: [...state.churches, createdChurch],
        }))
      } catch (error) {
        console.error('Erro ao criar igreja:', error)
      }
    },

    getAll: async () => {
      try {
        const allChurches = await prisma.church.findMany()
        set({ churches: allChurches })
      } catch (error) {
        console.error('Erro ao obter todas as igrejas:', error)
      }
    },

    getById: async (id) => {
      try {
        const church = await prisma.church.findUnique({
          where: { id },
        })
        return church
      } catch (error) {
        console.error('Erro ao obter igreja por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.church.update({
          where: { id },
          data,
        })
        await churchStore.getState().getAll() // Atualiza a lista de igrejas após a atualização
      } catch (error) {
        console.error('Erro ao atualizar igreja:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.church.delete({
          where: { id },
        })
        await churchStore.getState().getAll() // Atualiza a lista de igrejas após a exclusão
      } catch (error) {
        console.error('Erro ao excluir igreja:', error)
      }
    },
  }
})
