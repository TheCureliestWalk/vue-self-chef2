import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../lib/supabase";
export const userStore = defineStore("user", () => {
  let session = ref();
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });

  return { session };
});
