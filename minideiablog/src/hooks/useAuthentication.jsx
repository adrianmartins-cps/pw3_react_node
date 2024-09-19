import { db } from '../firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassaword,
    uploadProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'