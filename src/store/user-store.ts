import { prisma } from '@/services/database/prisma'
import { Account, Session, User, VerificationToken } from '@prisma/client'
import { create } from 'zustand'

interface UserState {
  accounts: Account[]
  sessions: Session[]
  verificationTokens: VerificationToken[]
  users: User[]
  add: (newUser: Omit<User, 'id'>) => Promise<void>
  getAll: () => Promise<void>
  getById: (id: string) => Promise<User | null>
  update: (id: string, data: Partial<User>) => Promise<void>
  remove: (id: string) => Promise<void>
}

export const userStore = create<UserState>((set) => {
  return {
    accounts: [],
    sessions: [],
    verificationTokens: [],
    users: [],

    add: async (newUser) => {
      try {
        const createdUser = await prisma.user.create({
          data: newUser,
          include: {
            accounts: true,
            sessions: true,
          },
        })
        set((state) => ({
          ...state,
          users: [...state.users, createdUser],
          accounts: [...state.accounts, ...createdUser.accounts],
          sessions: [...state.sessions, ...createdUser.sessions],
        }))
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error)
      }
    },

    getAll: async () => {
      try {
        const allUsers = await prisma.user.findMany({
          include: {
            accounts: true,
            sessions: true,
          },
        })
        set({ users: allUsers })
      } catch (error) {
        console.error('Erro ao obter todos os usuários:', error)
      }
    },

    getById: async (id) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id },
          include: {
            accounts: true,
            sessions: true,
          },
        })
        return user
      } catch (error) {
        console.error('Erro ao obter usuário por ID:', error)
        return null
      }
    },

    update: async (id, data) => {
      try {
        await prisma.user.update({
          where: { id },
          data,
          include: {
            accounts: true,
            sessions: true,
          },
        })
        await userStore.getState().getAll() // Atualiza a lista de usuários após a atualização
      } catch (error) {
        console.error('Erro ao atualizar usuário:', error)
      }
    },

    remove: async (id) => {
      try {
        await prisma.user.delete({
          where: { id },
        })
        await userStore.getState().getAll() // Atualiza a lista de usuários após a exclusão
      } catch (error) {
        console.error('Erro ao excluir usuário:', error)
      }
    },
  }
})
