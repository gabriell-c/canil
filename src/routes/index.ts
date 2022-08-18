import { Router } from 'express'
import * as HomePage from '../controllers/pageController'
import * as SearchControler from '../controllers/searchController'
const router = Router();

router.get('/', HomePage.home)
router.get('/dogs', HomePage.dogs)
router.get('/cats', HomePage.cats)
router.get('/fishes', HomePage.fishes)
router.get('/search', SearchControler.search)

export default router;