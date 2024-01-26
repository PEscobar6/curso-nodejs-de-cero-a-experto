import bcrypt from 'bcrypt';

export const bcryptPlugin = {
    hash: (password: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });
    },
    compare: (password: string, hash: string) => {
        return bcrypt.compare(password, hash);
    }
}