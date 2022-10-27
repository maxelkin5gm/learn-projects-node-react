import jwt, {JwtPayload as JsonWebTokenPayload} from 'jsonwebtoken'

export interface JwtPayload extends JsonWebTokenPayload {
    id: string,
    email: string
}

export class TokenService {

    static whiteListRefreshTokens: string[] = []

    static generateTokens(jwtPayload: JwtPayload) {
        const accessToken = jwt.sign(jwtPayload, process.env.JWT_ACCESS_SECRET!, {expiresIn: '10m'})
        const refreshToken = jwt.sign(jwtPayload, process.env.JWT_REFRESH_SECRET!)
        this.whiteListRefreshTokens.push(refreshToken)
        return {
            accessToken,
            refreshToken
        }
    }

    static verifyToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as JwtPayload
        } catch (e) {
            return null;
        }
    }

    static verifyRefreshToken(refreshToken: string) {
        try {
            if (!this.whiteListRefreshTokens.includes(refreshToken)) return null
            return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as JwtPayload
        } catch (e) {
            this.removeRefreshToken(refreshToken)
            return null;
        }
    }

    static async removeRefreshToken(refreshToken: string) {
        this.whiteListRefreshTokens.filter(token => token !== refreshToken)
    }
}