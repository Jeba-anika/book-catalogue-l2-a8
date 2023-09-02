// import { SortOrder } from 'mongoose'
// import { paginationHelpers } from '../../../helpers/paginationHelpers'
// import { IpaginationOptions } from '../../../interfaces/pagination'
// import { bookSearchableFields } from './book.constants'
// import { IBook, IBookFilters } from './book.interface'
// import { Book } from './book.model'
// import { IGenericResponse } from '../../../interfaces/common'
// import ApiError from '../../../errors/ApiError'
// import { JwtPayload } from 'jsonwebtoken'
// import { User } from '../users/users.model'

import { Book } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createBook = async (
  data: Book
  //userInfo: JwtPayload | null
): Promise<Book> => {
  //   console.log(userInfo)
  //   if (!userInfo) {
  //     throw new ApiError(401, 'Unauthorized access')
  //   }
  const result = await prisma.book.create({
    data,
    include:{
        category: true
    }
  })
  return result
}
const getAllBooks = async(queries)=>{
    const sortBy:string = queries.sortBy ? queries.sortBy :  'id'
    const sortOrder: string = queries.sortOrder ? queries.sortOrder :  'desc'
    const pageNumber = queries.page ? Number(queries.page): 1 
    const take = queries.size ? Number(queries.size) : 10
    const skip = (pageNumber-1) * take



    

    const result = await prisma.book.findMany({
        where:{
            title:{
                equals: "The Catcher in the Rye2"
            }
        },
        take,
        skip,
        orderBy: {
            [sortBy] : sortOrder
        }
    })
    const total = await prisma.book.count()
    return {
        meta: {
            page: pageNumber,
            size: take,
            total,
            totalPage: Math.ceil(total/take)
        },
        data:result
    }
}

// const getAllBooks = async (
//   filters: IBookFilters,
//   paginationOptions: IpaginationOptions
// ): Promise<IGenericResponse<IBook[]>> => {
//   const { searchTerm, ...filtersData } = filters
//   const andConditions = []
//   if (searchTerm) {
//     andConditions.push({
//       $or: bookSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     })
//   }

//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     })
//   }

//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions)
//   const sortConditions: { [key: string]: SortOrder } = {}
//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder
//   }

//   const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

//   const result = await Book.find(whereCondition)
//     .populate('owner')
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit)

//   const total = await Book.countDocuments()
//   return {
//     data: result,
//     meta: {
//       page,
//       limit,
//       total,
//     },
//   }
// }

// const getSingleBook = async (id: string): Promise<IBook | null> => {
//   const result = await Book.findById(id).populate('owner')
//   return result
// }

// const updateBook = async (
//   id: string,
//   updatedData: Partial<IBook>,
//   ownerInfo: JwtPayload | null
// ): Promise<IBook | null> => {
//   const selectedBook = await Book.findOne({ _id: id, owner: ownerInfo?._id })
//   if (!selectedBook) {
//     throw new ApiError(401, 'Unauthorized access')
//   }
//   const result = await Book.findOneAndUpdate({ _id: id }, updatedData, {
//     new: true,
//   }).populate('owner')
//   return result
// }

// const deleteBook = async (id: string, ownerInfo: JwtPayload | null) => {
//   const selectedBook = await Book.findOne({ _id: id, owner: ownerInfo?._id })
//   if (!selectedBook) {
//     throw new ApiError(401, 'Unauthorized access')
//   }
//   const result = await Book.findOneAndDelete(
//     { _id: id },
//     {
//       new: true,
//     }
//   )
//   return result
// }

// const addToWishlist = async (id: string, ownerInfo: JwtPayload | null) => {
//   const book = await Book.findById(id)
//   await User.updateOne(
//     {
//       _id: ownerInfo?._id,
//     },
//     { $addToSet: { wishlist: book } }
//   )
// }
// const addToCurrentlyReading = async (
//   id: string,
//   ownerInfo: JwtPayload | null
// ) => {
//   const book = await Book.findById(id)

//   await User.findByIdAndUpdate(
//     {
//       _id: ownerInfo?._id,
//     },
//     { $addToSet: { currentlyReading: book } }
//   )
// }
// const addToPlanToReadSoon = async (
//   id: string,
//   ownerInfo: JwtPayload | null
// ) => {
//   const book = await Book.findById(id)

//   await User.findByIdAndUpdate(
//     {
//       _id: ownerInfo?._id,
//     },
//     { $addToSet: { planToReadSoon: book } }
//   )
// }
// const setFinishedReading = async (id: string, ownerInfo: JwtPayload | null) => {
//   const user = await User.findById(ownerInfo?._id)
//   console.log(user)
//   //const book = await Book.findById(id)
//   await User.updateOne(
//     {
//       _id: ownerInfo?._id,
//     },
//     {
//       $pull: {
//         wishlist: { $in: [id] },
//         planToReadSoon: { $in: [id] },
//         currentlyReading: { $in: [id] },
//       },
//     }
//   )
//   const user1 = await User.findById(ownerInfo?._id)
//   console.log(user1)
// }
// const addReview = async (id: string, review: string) => {
//   await Book.updateOne(
//     {
//       _id: id,
//     },
//     { $addToSet: { reviews: review } }
//   )
// }

export const BookService = {
  createBook,
     getAllBooks,
  //   getSingleBook,
  //   updateBook,
  //   deleteBook,
  //   addToWishlist,
  //   addToCurrentlyReading,
  //   addToPlanToReadSoon,
  //   setFinishedReading,
  //   addReview,
}
