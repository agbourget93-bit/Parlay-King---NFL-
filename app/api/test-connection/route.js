import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getNflOdds } from '../../../lib/sharpapi';

export async function GET() {
  const results = { supabase: 'not tested', sharpapi: 'not tested' };

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { error } = await supabase.from('teams').select('id').limit(1);
    results.supabase = error ? `error: ${error.message}` : 'connected ✅';
  } catch (e) {
    results.supabase = `error: ${e.message}`;
  }

  try {
    const odds = await getNflOdds();
    const count = odds?.meta?.count ?? odds?.data?.length ?? 0;
    const books = odds?.meta?.books_returned?.join(', ') || 'unknown';
    results.sharpapi = `connected ✅ (${count} odds rows from: ${books})`;
  } catch (e) {
    results.sharpapi = `error: ${e.message}`;
  }

  return NextResponse.json(results);
}
