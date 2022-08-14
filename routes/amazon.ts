import {Router} from 'express';
import { check } from 'express-validator';
import { getProductAmazon } from '../controller/amazon';
import { validateFields } from '../middlewares/validateFields';
import { validateURL } from '../middlewares/validateURL';
import { validateUrlAmazon } from '../middlewares/validateUrlAmazon';
const router =  Router();

router.post('/',
[   
    check('url').not().isEmpty().withMessage('The url field is required'),
    validateFields,
    validateURL,
    validateUrlAmazon
],
getProductAmazon)

export default router;