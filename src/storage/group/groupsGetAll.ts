import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    // Pegando a string armazenada no storage
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    
    // Convertendo a string em um array de string e caso não tiver valor, retorna um array vazio
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}