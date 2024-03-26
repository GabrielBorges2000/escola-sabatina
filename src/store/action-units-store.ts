import { prisma } from '@/services/database/prisma'
import { ActionUnits } from '@prisma/client'
import { create } from 'zustand'

interface ActionUnitState {
  actionUnits: ActionUnits[]
  add: (newActionUnit: Omit<ActionUnits, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<ActionUnits | null>
  update: (id: string, data: Partial<ActionUnits>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const actionUnitsStore = create<ActionUnitState>((set) => {
  return {
    actionUnits: [],

    add: async (newActionUnit) => {
      try {
        const createdActionUnit = await prisma.actionUnits.create({
          data: newActionUnit,
        })
        set((state) => ({
          actionUnits: [...state.actionUnits, createdActionUnit],
        }))
      } catch (error) {
        console.error('Erro ao adicionar unidade de ação:', error)
      }
    },

    getAll: async () => {
      try {
        const allActionUnits = await prisma.actionUnits.findMany()
        set({ actionUnits: allActionUnits })
      } catch (error) {
        console.error('Erro ao obter todas as unidades de ação:', error)
      }
    },

    getById: async (id) => {
      try {
        const actionUnit = await prisma.actionUnits.findUnique({
          where: { id },
        })
        return actionUnit
      } catch (error) {
        console.error('Erro ao obter unidade de ação por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.actionUnits.update({
          where: { id },
          data,
        })
        await actionUnitsStore.getState().getAll() // Atualiza a lista de unidades de ação após a atualização
      } catch (error) {
        console.error('Erro ao atualizar unidade de ação:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.actionUnits.delete({
          where: { id },
        })
        await actionUnitsStore.getState().getAll() // Atualiza a lista de unidades de ação após a exclusão
      } catch (error) {
        console.error('Erro ao excluir unidade de ação:', error)
      }
    },
  }
})
