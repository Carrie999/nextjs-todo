import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignOption {
    expiresIn?: String | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
    expiresIn: '10d'
}

const NEXTAUTH_SECRET = '2bf0fa1d7db9ecd60b2c436978513d3c1c5536a8'

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
    const secretKey = process.env.NEXTAUTH_SECRET
    if (!payload) return ''
    const token = jwt.sign(payload, secretKey ? secretKey : NEXTAUTH_SECRET);
    return token

}

export function verifyJwt(token: string) {
    try {
        const secretKey = process.env.NEXTAUTH_SECRET
        const decoded = jwt.verify(token, secretKey ? secretKey : NEXTAUTH_SECRET)
        return decoded as JwtPayload
    } catch (err) {
        // console.error(err)
    }
}
