import {
  createPinia,
  defineStore,
} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

interface GlobalState {
  token: string;
  userInfo: any;
}

export const GlobalStore = defineStore({
  id: "GlobalState", // id: 必须的，在所有 Store 中唯一
  state: (): GlobalState => ({
      token: "dsf45sd4f4dsf5sdfs5f4",
      userInfo: {
          name: "ll",
          sex: "male"
      },
  }),
  getters: {},
  actions: {
      setToken(token: string) {
          this.token = token;
      },
      setUserIngo(userInfo: any) {
          this.userInfo = userInfo;
      },
  },
  // 持久化
  persist: {
      key: "GlobalState",
      storage: localStorage,
  },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;