import { EntityRepository, Repository } from 'typeorm';
import Survey from '../models/Survey';

@EntityRepository(Survey)
class UsersRepository extends Repository<Survey> {}

export default UsersRepository;
