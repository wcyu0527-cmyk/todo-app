// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// 確保環境變數存在，否則 TypeScript 會報錯
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 建立並匯出 Supabase Client 實例
export const supabase = createClient(supabaseUrl, supabaseAnonKey)