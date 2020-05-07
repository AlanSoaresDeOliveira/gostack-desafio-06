import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateCategoryService from '../services/CreateCategoryService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const categoryRoutes = Router();

// transactionsRouter.get('/', async (request, response) => {
//   // TODO
// });

categoryRoutes.post('/', async (request, response) => {
  const { title } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({
    title,
  });

  return response.json(category);
});

export default categoryRoutes;
