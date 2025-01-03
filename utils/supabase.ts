// Code for connecting to Supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qwbftujuhdgrwofalspa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmZ0dWp1aGRncndvZmFsc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0Mjg3MjUsImV4cCI6MjA0MjAwNDcyNX0.OXZQjbv5bKzImPJFND_r7P99bsQZiiU9qwbc4qOCzqg"
export const supabase = createClient(supabaseUrl, supabaseKey)
// Fonction pour récupérer un formulaire depuis Supabase
export const fetchFormFromSupabase = async (formId: string) => {
    const { data, error } = await supabase
      .from('forms')  // Remplacez par le nom réel de votre table
      .select('*')
      .eq('id', formId)
      .single();  // Utilisez `.single()` pour récupérer une seule entrée
  
    if (error) {
      console.error('Erreur lors de la récupération du formulaire :', error);
      return null;
    }
  
    return data;
  }