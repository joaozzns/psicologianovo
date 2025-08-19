import { createClient } from '@supabase/supabase-js'

// Using Lovable's native Supabase integration
const supabaseUrl = 'https://ercpbjmgmdxzfwqytryt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyY3Biam1nbWR4emZ3cXl0cnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNTMxMDQsImV4cCI6MjA1MDcyOTEwNH0.YN3FlHb2PKT6qP8f7Hs6VYsqA6qMc3Vqr7qOjn7uJxE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)