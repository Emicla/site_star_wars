import { getDocs, getFirestore, query } from "firebase/firestore";
import { app } from "../services/FirebaseConnect";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export function salvarDuvida(dados) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await addDoc(collection(db, "duvidas"), dados);
            resolve(docRef.id);
        } catch (e) {
            reject("Error adding document: ", e);
        }
    })
}

export function buscarDuvidas() {
    return new Promise(async (resolve, reject) => {

        try {
            const q = query(collection(db, "duvidas"));
            const querySnapshot = await getDocs(q);
            let resultados = [];

            querySnapshot.forEach((doc) => {
                let obj = {
                    id: doc.id,
                    ...doc.data()
                }

                resultados.push(obj);
                resolve(resultados);
            });
            
        } catch (error) {
            reject(error)
        }
    })
}