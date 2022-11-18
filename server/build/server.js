import express from 'express';
const app = express();
app.get('/ads', ({ request, response }) => {
    return response.json([
        { id: 1, ad: 'Anúncio 1' },
        { id: 2, ad: 'Anúncio 2' },
        { id: 3, ad: 'Anúncio 3' }
    ]);
});
app.listen(3333);
