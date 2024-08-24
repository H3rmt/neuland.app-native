import { USER_EMPLOYEE, USER_GUEST, USER_STUDENT } from '@/data/constants'
import {
    extractFacultyFromPersonalData,
    getPersonalData,
} from '@/utils/api-utils'
import * as SecureStore from 'expo-secure-store'
import { useCallback, useEffect, useMemo } from 'react'
import { useMMKVString } from 'react-native-mmkv'

export interface UserKindContextType {
    userKind: 'guest' | 'student' | 'employee' | undefined
    userFaculty: string | undefined
    toggleUserKind: (userKind: boolean | undefined) => void
}

/**
 * Custom hook that returns the user kind and a function to toggle it.
 * The user kind is stored in SecureStore and defaults to USER_GUEST.
 * @returns An object with the userKind and toggleUserKind function.
 */
export function useUserKind(): UserKindContextType {
    const [userKind, setUserKind] = useMMKVString('userType') as [
        'student' | 'employee' | 'guest' | undefined,
        (value: 'student' | 'employee' | 'guest' | undefined) => void,
    ]
    const [userFaculty, setUserFaculty] = useMMKVString('userFaculty')

    useEffect(() => {
        const loadData = async (): Promise<void> => {
            if (userFaculty === undefined && userKind === USER_STUDENT) {
                const persData = await getPersonalData()
                const faculty = extractFacultyFromPersonalData(persData)
                setUserFaculty(faculty ?? undefined)
            }
        }
        void loadData()
    }, [userKind, userFaculty, setUserFaculty])

    /**
     * Function to toggle the user kind.
     * @param value A boolean indicating whether the user is a student (true) or an employee (false).
     */
    const toggleUserKind = useCallback(
        (value: boolean | undefined): void => {
            let userType: 'student' | 'employee' | 'guest' | undefined

            switch (value) {
                case true:
                    userType = USER_STUDENT
                    break
                case false:
                    userType = USER_EMPLOYEE
                    break
                default:
                    userType = USER_GUEST
                    break
            }

            setUserKind(userType)
            void SecureStore.setItemAsync('userType', userType)
        },
        [setUserKind]
    )

    return useMemo(
        () => ({
            userKind,
            userFaculty,
            toggleUserKind,
        }),
        [userKind, userFaculty, toggleUserKind]
    )
}