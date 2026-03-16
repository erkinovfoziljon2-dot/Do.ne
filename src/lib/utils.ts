const API_URL='https://helminthoid-clumsily-xuan.ngrok-free.dev'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const registerUser = async (data: any) => {
  const res = await fetch(`${API_URL}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  console.log(res)

  if (!res.ok) throw new Error('Register failed')

  return res.json()
}
