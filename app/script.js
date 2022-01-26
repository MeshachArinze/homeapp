import { initializeApp } from "firebase/app";
import { getFirestore,
    collection, onSnapshot, 
    addDoc, deleteDoc, doc, query, orderBy, serverTimestamp, getDoc
} from "firebase/firestore";
import { getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUtmpgMtj39Kx3GqPivom92WKbFwWoBzM",
    authDomain: "fir-9-f7a87.firebaseapp.com",
    projectId: "fir-9-f7a87",
    storageBucket: "fir-9-f7a87.appspot.com",
    messagingSenderId: "1041784894553",
    appId: "1:1041784894553:web:446a2b697bcf760cec2d48"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore()
const auth = getAuth()

// colletion ref
const colRef = collection(db, 'form')

// queries
// const q = query(colRef, orderBy('createdAt'))

// // real time collection data
// onSnapshot(q, (snapshot) => {
//     let form = []
//     snapshot.docs.forEach((doc) => {
//         form.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(form)
// })

// const addForm = document.querySelector('.add');
// addForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     addDoc(colRef, {
//         username: addForm.username.value,
//         email: addForm.email.value,        
//         password: addForm.password.value,
//         createdAt: serverTimestamp()
//     })
//     .then(() => {
//         addForm.reset()
//     })
// });


// const deleteForm = document.querySelector('.delete');
// deleteForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const docRef = doc(db, 'form')
//     deleteDoc(docRef)
//     .then(() => {
//         deleteForm.reset()
//     })
// });

// //for single document
// const docRef = doc(db, 'form', '6ogedr5rEmbsmyvaEEU4')
// getDoc(docRef)
// .then((doc) => {
//     console.log(doc.data(), doc.id)
// })

// onSnapshot(docRef, (doc) => {
//     console.log(doc.data(), doc.id)
// })

const signUpForm = document.getElementById('signup')
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signUpForm.email.value
    const password = signUpForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        // console.log('user cred:', cred.user)
        signUpForm.reset()
    })
    .catch((err) => {
        console.log(err.message)
    })
}); 

const signInForm = document.getElementById('signin');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signInForm.email.value
    const password = signInForm.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        // console.log('user login in:', cred.user)
        signUpForm.reset()
    })
    .catch((err) => {
        console.log(err.message)
    })
}); 

// subscribing to auth changes
onAuthStateChanged(auth, (user) => {
    console.log('user status changed:', user)
})
