import { db } from '../firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassaword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () =>{
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ cancelled, setCancelled ] = useState(false)

    const auth = getAuth()

    function checkIsCancelled(){
        if(cancelled){
            return
        }
    }

    async function createUser(data){
        checkIsCancelled()

        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            return user
        }catch(error){
            console.error(error.message),
            console.table(typeof error.message)

            let systemErrorMenssage

            if(error.menssage.includes('Password')){
              systemErrorMenssage = 'A senha precisa conter ao menos 6 caracteres.'
            }else if(error.menssage.incudes('email-already')){
                systemErrorMenssage = 'Este e-mail já exite em nossos sitemas'
            }else{
                systemErrorMenssage = 'Tente mais tarde nosso sistema esta indisponivel.'
            }

            setLoading(false)
            setError(systemErrorMenssage)
        }
    }

    const login = async (data) => {
        checkIsCancelled()

        setLoading(true)
        setError(false)

        try{
            await signInWithEmailAndPassaword(
                auth,
                data.email,
                date.password
            )
            setLoading(false)
        }catch(error){
            console.error(error.menssage)
            console.table(typeof error.menssage)

            let systemErrorMenssage
            
            if(error.menssage.includes('invalid-login-credentials')){
                systemErrorMenssage = 'Este usuário não existe em nosso sistems.'
              }else if(error.menssage.incudes('wrong-password')){
                  systemErrorMenssage = 'Há algum erro com suas credenciais'
              }else{
                  systemErrorMenssage = 'Tente mais tarde nosso sistema esta indisponivel.'
              }

            setLoading(false)
            setError(systemErrorMenssage)
        }
    }

    const logout = () =>{
        checkIsCancelled()
        signOut(auth)
    }

    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        login,
        logout
       
    }
}