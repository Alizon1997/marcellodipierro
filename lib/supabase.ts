import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fiyysxfwpewxjtwcmqat.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpeXlzeGZ3cGV3eGp0d2NtcWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjcxNzksImV4cCI6MjA4NTYwMzE3OX0.vE-anmUGfzFQWZ6aGSGloNEzOG2H3FGdayNpQWyzfAc';

export const supabase = createClient(supabaseUrl, supabaseKey);