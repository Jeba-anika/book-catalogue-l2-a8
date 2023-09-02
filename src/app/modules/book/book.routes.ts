import express from 'express'
import { BookController } from './book.controller'
// import auth from '../../middlewares/auth'
// import { ENUM_USER_ROLES } from '../../enums/user'
const router = express.Router()

// router.get('/:id', BookController.getSingleBook)
// router.patch('/:id', auth(ENUM_USER_ROLES.USER), BookController.updateBook)
// router.delete('/:id', auth(ENUM_USER_ROLES.USER), BookController.deleteBook)
// router.post(
//   '/addToWishlist/:id',
//   auth(ENUM_USER_ROLES.USER),
//   BookController.addToWishlist
// )
// router.post(
//   '/addToCurrentlyReading/:id',
//   auth(ENUM_USER_ROLES.USER),
//   BookController.addToCurrentlyReading
// )
// router.post(
//   '/addToPlanToReadSoon/:id',
//   auth(ENUM_USER_ROLES.USER),
//   BookController.addToPlanToReadSoon
// )
// router.post(
//   '/finishedReading/:id',
//   auth(ENUM_USER_ROLES.USER),
//   BookController.setFinishedReading
// )
// router.post(
//   '/addReview/:id',
//   auth(ENUM_USER_ROLES.USER),
//   BookController.addReview
// )
router.post('/create-book', BookController.createBook)
router.get('/', BookController.getAllBooks)
router.get('/:id', BookController.getSingleBook)
router.patch('/:id', BookController.updateBook)
router.get('/:categoryId/category', BookController.getAllBooksByCategory)

export const BookRoutes = router
