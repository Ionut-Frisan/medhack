import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../../hooks/useLocalStorage.js";

const ls = useLocalStorage();

const initialState = {
  token: "",
  role: "",
  isLoggedIn: false,
};

// export const login = createAsyncThunk("login", async () => {
//   try {
//     const res = await axios.get("http://localhost:8000/login");
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.role = "";
      state.isLoggedIn = false;
      ls.set("token", "");
      ls.set("role", "");
    },
    login: (state, action) => {
      const { id: token = "", role = "" } = action.payload;
      if (!token || !role) return;
      state.token = token;
      state.role = role;
      state.isLoggedIn = true;
      ls.set("token", token);
      ls.set("role", role);
    },
    initializeStore: (state, action) => {
       const role = ls.get('role');
       const token = ls.get('token');
       if (!token || !role) {
          state.token = '';
          state.role = '';
          state.isLoggedIn = false;
          return;
       }
       state.token = token;
       state.role = role;
       state.isLoggedIn = true; 
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(login.fulfilled, (state, action) => {
  //       const { token = "", role = "" } = action.payload;
  //       state.token = token;
  //       state.role = role;
  //       state.isLoggedIn = true;
  //       ls.set("token", token);
  //       ls.set("role", role);
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.token = "";
  //       state.role = "";
  //       state.isLoggedIn = false;
  //       ls.set("token", "");
  //       ls.set("role", "");
  //     });
  // },
});

//getters
export const getToken = (state) => state.auth.token;
export const getRole = (state) => state.auth.role;
export const getAuthStatus = (state) => state.auth.isLoggedIn;

export const { logout, login, initializeStore } = authSlice.actions;

export default authSlice.reducer;
