import { prisma } from '@/services/database/prisma'
import { Requirements } from '@prisma/client'
import { create } from 'zustand'

interface RequirementsState {
  requirements: Requirements[]
  add: (newRequirement: Omit<Requirements, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<Requirements | null>
  update: (id: string, data: Partial<Requirements>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const requirementStore = create<RequirementsState>((set) => {
  return {
    requirements: [],

    add: async (newRequirement) => {
      try {
        const createdRequirement = await prisma.requirements.create({
          data: newRequirement,
        })
        set((state) => ({
          requirements: [...state.requirements, createdRequirement],
        }))
      } catch (error) {
        console.error('Erro ao adicionar requisito:', error)
      }
    },

    getAll: async () => {
      try {
        const allRequirements = await prisma.requirements.findMany()
        set({ requirements: allRequirements })
      } catch (error) {
        console.error('Erro ao obter todos os requisitos:', error)
      }
    },

    getById: async (id) => {
      try {
        const requirement = await prisma.requirements.findUnique({
          where: { id },
        })
        return requirement
      } catch (error) {
        console.error('Erro ao obter requisito por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.requirements.update({
          where: { id },
          data,
        })
        await requirementStore.getState().getAll() // Atualiza a lista de requisitos após a atualização
      } catch (error) {
        console.error('Erro ao atualizar requisito:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.requirements.delete({
          where: { id },
        })
        await requirementStore.getState().getAll() // Atualiza a lista de requisitos após a exclusão
      } catch (error) {
        console.error('Erro ao excluir requisito:', error)
      }
    },
  }
})
