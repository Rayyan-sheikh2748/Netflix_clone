import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signup = async (name, email, password) => {
  try {
    // Validate inputs
    if (!name || !email || !password) {
      const message = "Please fill in all fields";
      alert(message);
      return { success: false, error: message };
    }
    if (password.length < 6) {
      const message = "Password must be at least 6 characters";
      alert(message);
      toast.error(message)
      return { success: false, error: message };
    }
    
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully:", response.user.email);
    return { success: true, user: response.user };
  } catch (error) {
    console.error("Signup error:", error.code, error.message);
    let userMessage = error.message;
    
    // Map Firebase error codes to user-friendly messages
    if (error.code === 'auth/email-already-in-use') {
      userMessage = "Email already exists. Please use a different email.";
    } else if (error.code === 'auth/invalid-email') {
      userMessage = "Invalid email format. Please enter a valid email.";
    } else if (error.code === 'auth/weak-password') {
      userMessage = "Password is too weak. Use at least 6 characters.";
    } else if (error.code === 'auth/operation-not-allowed') {
      userMessage = "Sign up is currently disabled. Please try again later.";
    } else if (error.code === 'auth/network-request-failed') {
      userMessage = "Network error. Please check your connection.";
    }
    
    alert(userMessage);
    return { success: false, error: userMessage };
  }
};

export const login = async (email, password) => {
  try {
    // Validate inputs
    if (!email || !password) {
      const message = "Please enter email and password";
      alert(message);
      toast.error(message)
      return { success: false, error: message };
    }
    
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", response.user.email);
    return { success: true, user: response.user };
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    let userMessage = error.message;
    
    // Map Firebase error codes to user-friendly messages
    if (error.code === 'auth/user-not-found') {
      userMessage = "Email not found. Please sign up or check the email.";
    } else if (error.code === 'auth/wrong-password') {
      userMessage = "Wrong password. Please try again.";
    } else if (error.code === 'auth/invalid-email') {
      userMessage = "Invalid email format. Please enter a valid email.";
    } else if (error.code === 'auth/user-disabled') {
      userMessage = "This account has been disabled.";
    } else if (error.code === 'auth/network-request-failed') {
      userMessage = "Network error. Please check your connection.";
    } else if (error.code === 'auth/invalid-credential') {
      userMessage = "Invalid email or password. Please try again.";
    }
    
    alert(userMessage);
    return { success: false, error: userMessage };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout error:", error.message);

  }
};
