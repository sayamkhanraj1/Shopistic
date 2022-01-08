import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LogIn/firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
         const [name, setName] = useState('');
         const [user, setUser] = useState ({});
         const [isLoading, setIsloading] = useState(true);
         const [email, setEmail] = useState('');
         const [error, setError] = useState('');

         const auth = getAuth();

         const createNewUser = (email, password) =>{
                  createUserWithEmailAndPassword(auth, email, password)
                  .then(result =>{

                          setError('');
                          const newUser = {email, displayName: name};
                          setUser(newUser);
                          // save user to the database
                          setUserName();
                  })
                  .catch((error) =>{
                          console.log(error.message);
                  });   
          }

          const setUserName = () =>{
                  updateProfile(auth.currentUser, {displayName: name})
                  .then(result => {})
          }

         useEffect(()=>{
                  const unsubscribed =  onAuthStateChanged(auth, user =>{
                             if(user){
                                      setUser(user);
                             }
                             else{
                                      setUser({});
                             };
                             setIsloading(false);
                    });
                    return () => unsubscribed;
           }, [auth]);

           const logOut = () =>{
                  setIsloading(true)
                    signOut(auth)
                    .then(() =>{ })
                    .finally(() => setIsloading(false));
           }
         return {
                  createNewUser,
                  user,
                  isLoading,
                  logOut
         }
};

export default useFirebase;