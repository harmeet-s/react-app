// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { AppState } from 'app/slice/types';
import { LoginPageState } from 'app/pages/LoginPage/slice/types';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  app?: AppState;
  loginPage?: LoginPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
