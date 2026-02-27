import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kmfyyrkynlbskkylpaso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZnl5cmt5bmxic2treWxwYXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0OTYzMjcsImV4cCI6MjA4NzA3MjMyN30.IXfvMkctLpE48VZgIdo6m2FFdTZECr6zEYAck-xiqqs';

export const supabase = createClient(supabaseUrl, supabaseKey);