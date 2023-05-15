import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    // Pegando os dados já armazenados no storage
    const storedGroups = await groupsGetAll();

    // Atualizando os dados adicionando um novo grupo caso tiver se não tiver adiciona normalmente
    // E depois convertendo o array de string em uma string. OBS: Podemos converter também um objeto...
    const storage = JSON.stringify([...storedGroups, newGroup]);

    // Armazenando no storage do aplicativo
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}