import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
export const useCommentsStore = defineStore("comments", {
    state: () => ({
        comments: [],
        firebaseConfig: {
            apiKey: "AIzaSyAoFyFC2BZWrdRAaS1rwVphCBtPHmVFqPY",
            authDomain: "site-1a321.firebaseapp.com",
            projectId: "site-1a321",
            storageBucket: "site-1a321.appspot.com",
            messagingSenderId: "650154803968",
            appId: "1:650154803968:web:bfecb54be49a75b33da9e5",
            measurementId: "G-XPHP6FT0PG"
        }
    }),
    actions: {
        fetchComments() {
            initializeApp(this.firebaseConfig)

            const db = getFirestore();
            const colref = collection(db, "comments");
            const q = query(colref, orderBy("createdAt"));

            let commentsList = []

            onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    commentsList.push({...doc.data(), id: doc.id })
                });
            })
            this.comments = commentsList
        },
        addComment(body, times) {
            console.log(body)
            initializeApp(this.firebaseConfig)
            const db = getFirestore();
            const colref = collection(db, "comments");
            addDoc(colref, {
                body: body,
                createdAt: times
            })
        }
    }
})