// Code for connecting to Supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qwbftujuhdgrwofalspa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmZ0dWp1aGRncndvZmFsc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0Mjg3MjUsImV4cCI6MjA0MjAwNDcyNX0.OXZQjbv5bKzImPJFND_r7P99bsQZiiU9qwbc4qOCzqg"
export const supabase = createClient(supabaseUrl, supabaseKey)