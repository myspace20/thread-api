import JWTTools from "jsonwebtoken";

export class JWTService {
  static sign(payload, key, options) {
    return JWTTools.sign(payload, key, options);
  }

  static verify(token, key, options) {
    try {
      const decoded = JWTTools.verify(token, key, options);
      return { decoded, expired: false };
    } catch (e) {
      return { decoded: null, expired: true };
    }
  }
}
