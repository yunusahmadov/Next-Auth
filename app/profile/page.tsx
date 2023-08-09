import { authConfig } from "@/config/auth"
import { getServerSession } from "next-auth"

export default async function Profile() {
    const session=await getServerSession(authConfig)
  return (
    <div>
        <h1>Profile of {session?.user?.name}</h1>
        <div>
            {session?.user?.image &&
            <img src={session.user.image}  />
            }
        </div>
    </div>
  )
}
