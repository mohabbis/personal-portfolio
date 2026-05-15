import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const pathname = url.pathname
  
  // Remove /images prefix and get the actual file path
  const relativePath = pathname.replace('/images/', '')
  const filePath = path.join(process.cwd(), 'public', relativePath)
  
  try {
    const fileBuffer = fs.readFileSync(filePath)
    const ext = path.extname(filePath).toLowerCase()
    const contentType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 
                        ext === '.png' ? 'image/png' :
                        ext === '.webp' ? 'image/webp' : 'application/octet-stream'
    
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  } catch (error) {
    return new Response('Not Found', { status: 404 })
  }
}
