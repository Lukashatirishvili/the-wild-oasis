import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oatomqrmxoodjvpeckmg.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdG9tcXJteG9vZGp2cGVja21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MjIzNTUsImV4cCI6MjAyODQ5ODM1NX0.8BHZqywBx61BEAbc4GnPrH8Zi9MLIu4HIDd4YJrqRio`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
