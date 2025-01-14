import { supabase } from "./App";

async function getUsernames() {
  try {
    const { data, error } = await supabase
    .from("users")
    .select("username");

    if (error) {
      console.error("Error fetching data: ", error);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}

async function getUserIds() {
  try {
    const { data, error } = await supabase.from("users").select("id");

    if (error) {
      console.error("Error fetching data: ", error);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}

async function getFriends() {
  const user = await supabase.auth.getUser();

  try {
    const { data, error } = await supabase
      .from("Friends")
      .select("friendId")
      .eq("userId", user.data.user.id);

    if (error) {
      console.error("Error fetching data: ", error);
      return null;
    } else {
     //the raw data is a friendsId array
      return data;
    }
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}

export const friendFunctions = {
  getUsernames,
  getUserIds,
  getFriends,
};
