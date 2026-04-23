import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const fileName = req.params.name;

    const filePath = path.join(process.cwd(), 'storage', fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(404).send('Arquivo não encontrado');
        }

        res.status(200).send('Arquivo deletado com sucesso');
    });
};