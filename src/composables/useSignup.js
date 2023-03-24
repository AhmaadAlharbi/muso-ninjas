import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPedning = ref(false);
const signup = async (email, password, displayName) => {
  error.value = null;
  isPedning.value = true;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    isPedning.value = false;

    if (!res) {
      throw new Error("Could not complete signup");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPedning.value = false;
  }
};

const useSignup = () => {
  return { error, signup, isPedning };
};

export default useSignup;
