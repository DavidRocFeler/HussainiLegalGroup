// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function GET() {
  try {    
    revalidatePath('/');       
    revalidatePath('/about');   
    revalidatePath('/expertise');
    revalidatePath('/careers'); 
    revalidatePath('/insights');
    revalidatePath('/subscribe');
    revalidatePath('/contact');
    
    revalidatePath('/insights/articles');
    revalidatePath('/insights/publications');
    
    revalidatePath('/insights/[category]', 'page');
    revalidatePath('/insights/[category]/[slug]', 'page');
    
    return Response.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      paths: [
        '/', '/about', '/expertise', '/careers', '/insights', 
        '/subscribe', '/contact', '/insights/articles', 
        '/insights/publications', '/insights/[category]', 
        '/insights/[category]/[slug]'
      ]
    });
    
  } catch (err) {
    return Response.json({ revalidated: false, error: err });
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    revalidatePath('/');
    revalidatePath('/about');
    revalidatePath('/expertise');
    revalidatePath('/careers');
    revalidatePath('/insights');
    revalidatePath('/subscribe');
    revalidatePath('/contact');
    
    revalidatePath('/insights/articles');
    revalidatePath('/insights/publications');
    
    revalidatePath('/insights/[category]', 'page');
    revalidatePath('/insights/[category]/[slug]', 'page');
    
    return Response.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      message: 'Cron revalidation successful',
      paths: [
        '/', '/about', '/expertise', '/careers', '/insights', 
        '/subscribe', '/contact', '/insights/articles', 
        '/insights/publications', '/insights/[category]', 
        '/insights/[category]/[slug]'
      ]
    });
    
  } catch (err) {
    return Response.json({ revalidated: false, error: err });
  }
}