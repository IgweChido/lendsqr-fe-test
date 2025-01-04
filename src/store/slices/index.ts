import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./exampleReducer";
import dashboardReducer from "./dashboardReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
const rootReducer = combineReducers({
  example: exampleReducer,
  users: usersReducer,
  dashboard: dashboardReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
