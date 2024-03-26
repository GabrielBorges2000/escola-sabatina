import { create } from 'zustand'
import { actionUnitsStore } from '@/store/action-units-store'
import { attendanceListStore } from '@/store/attendanceLists-store'
import { churchStore } from '@/store/church-store'
import { requirementStore } from '@/store/requirements-store'
import { studentStore } from '@/store/student-store'
import { userStore } from '@/store/user-store'

interface StoreState {
  actionUnits: ReturnType<typeof actionUnitsStore>
  attendanceList: ReturnType<typeof attendanceListStore>
  church: ReturnType<typeof churchStore>
  requirement: ReturnType<typeof requirementStore>
  student: ReturnType<typeof studentStore>
  user: ReturnType<typeof userStore>
}

export const useStore = create<StoreState>(() => {
  return {
    actionUnits: actionUnitsStore(),
    attendanceList: attendanceListStore(),
    church: churchStore(),
    requirement: requirementStore(),
    student: studentStore(),
    user: userStore(),
  }
})
