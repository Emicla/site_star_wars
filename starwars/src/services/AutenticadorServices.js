import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../services/FirebaseConect";

const auth = getAuth(app);

export default function login(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage);
            });
    });
}