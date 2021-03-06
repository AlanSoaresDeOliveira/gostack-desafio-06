import { getRepository, Like } from 'typeorm';
import AppError from '../errors/AppError';

import Category from '../models/Category';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    // const checkCategoryExists = await categoryRepository.findOne({
    //   where: { title },
    // });

    const checkCategoryExists = await categoryRepository.findOne({
      title: Like(`%${title}%`),
    });

    if (checkCategoryExists) {
      throw new AppError('Category already used');
    }

    const category = categoryRepository.create({ title });

    await categoryRepository.save(category);

    return category;

    // TODO
  }
}

export default CreateCategoryService;
