import { defineStore } from 'pinia';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: null,
    isReady: false,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user,
    globalLoading: (state) => state.loading || !state.isReady,
  },
  actions: {
    async register({ fullName, phone, email, password }) {
      this.loading = true;
      this.error = null;
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);

        await sendEmailVerification(cred.user);

        const userRef = doc(db, 'users', cred.user.uid);
        await setDoc(userRef, {
          fullName,
          phone,
          email,
          createdAt: serverTimestamp(),
        });

        return cred.user;
      } catch (err) {
        console.error('register error', err);
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async login({ email, password }) {
      this.loading = true;
      this.error = null;
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return cred.user;
      } catch (err) {
        console.error('login error', err);
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async loginWithGoogle() {
      this.loading = true;
      this.error = null;
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        const userRef = doc(db, 'users', user.uid);
        const snap = await getDoc(userRef);
        if (!snap.exists()) {
          await setDoc(userRef, {
            fullName: user.displayName || '',
            phone: '',
            email: user.email,
            provider: 'google',
            createdAt: serverTimestamp(),
          });
        }
        return user;
      } catch (err) {
        console.error('google login error', err);
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;
      this.error = null;
      try {
        await signOut(auth);
        this.user = null;
        this.profile = null;
      } catch (err) {
        console.error('logout error', err);
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async sendPasswordReset(email) {
      this.loading = true;
      this.error = null;
      try {
        await sendPasswordResetEmail(auth, email, {
          url: `${window.location.origin}/auth`,
          handleCodeInApp: false,
        });
      } catch (err) {
        console.error('sendPasswordReset error', err);
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async updateProfileData(data = {}) {
      if (!this.user?.uid) throw new Error('No user to update');
      try {
        const userRef = doc(db, 'users', this.user.uid);
        await updateDoc(userRef, data);
        this.profile = { ...this.profile, ...data };
      } catch (err) {
        console.error('updateProfileData error', err);
        this.error = err;
        throw err;
      }
    },

    initAuth() {
      if (this._authInitialized) return;
      this._authInitialized = true;
      onAuthStateChanged(auth, async (fbUser) => {
        if (fbUser) {
          this.user = {
            uid: fbUser.uid,
            email: fbUser.email,
            emailVerified: fbUser.emailVerified,
            displayName: fbUser.displayName,
            photoURL: fbUser.photoURL,
          };

          try {
            const userRef = doc(db, 'users', fbUser.uid);
            const snap = await getDoc(userRef);
            this.profile = snap.exists() ? { id: snap.id, ...snap.data() } : null;
          } catch (err) {
            console.error('fetch profile error', err);
            this.profile = null;
          }
        } else {
          this.user = null;
          this.profile = null;
        }

        this.isReady = true;
      });
    },
  },
});
