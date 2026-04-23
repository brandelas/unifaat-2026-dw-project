import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const { name, content } = req.body;

    const filePath = path.join(process.cwd(), 'storage', name);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).send('Erro ao criar arquivo');
        }

        res.status(201).send('Arquivo criado com sucesso');
    });
};