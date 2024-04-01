import useSWR from "swr";
import { useSession } from 'next-auth/react'
import { signJwtAccessToken } from './jwt';


export function useUser() {
    const { data: session } = useSession()
    // @ts-ignore
    const accessToken = signJwtAccessToken(session && session.token)
    // @ts-ignore
    const fetcher = (...args: any) => fetch(...args, {
        headers: {
            authorization: `bearer ${accessToken}`,
            Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
        },
        method: 'get',
    }).then((res) => res.json())


    const { data, error, isLoading } = useSWR(accessToken ? '/api/user' : null, fetcher)
    return {
        user: data,
        isLoading,
        isError: error,
    }
}

