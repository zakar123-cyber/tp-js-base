//etape 4
export const isExpired = (isoDate, ref = new Date()) =>
new Date(isoDate) < ref;
