import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://buomcjwazcerojfkarub.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1b21jandhemNlcm9qZmthcnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxODczOTMsImV4cCI6MjA4Nzc2MzM5M30.CB7Ae6YR4qEutyQJaI7YXzKATaofjgI7ylhRZYI4R2s';

export const supabase = createClient(supabaseUrl, supabaseKey);