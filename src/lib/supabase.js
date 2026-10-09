import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://rxncsjlsyzosbwhthwxj.supabase.co"; 
 
const supabasePublishableKey = 
  "sb_publishable_Op25XnIw2QKDYuE1B0Jdxw_YcGyQumw";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);

