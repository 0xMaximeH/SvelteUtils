import * as db from '$lib/server/database';
 
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
  const sessionid = cookies.get('sessionid');
 
  return {
    user: await db.getUser(sessionid)
  };
}