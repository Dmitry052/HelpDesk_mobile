import AsyncStorage from "@react-native-community/async-storage";

export const setUserId = async (value: string) => {
  try {
    return await AsyncStorage.setItem("uuid", value);
  } catch (e) {
    console.log(e);
  }
};

export const getUserId = async () => {
  try {
    return await AsyncStorage.getItem("uuid");
  } catch (e) {
    console.log(e);
  }
};
