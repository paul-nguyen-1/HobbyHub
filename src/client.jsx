import { createClient } from "@supabase/supabase-js";

const URL = "https://cbpfflduoaryrtiobtjf.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicGZmbGR1b2FyeXJ0aW9idGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNDExMjIsImV4cCI6MTk5NjkxNzEyMn0.e9_-QvMmMZXdFgD6mzg8zmtpFfIF4mSCl3N8ZQ3pa2Y";

export const supabase = createClient(URL, API_KEY);

