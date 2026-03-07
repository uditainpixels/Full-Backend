//--M1--

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}

//--M2--

// const asyncHandler = (fn)  => async(req, res, next) => {
//     try{
//         await fn(req,res,next)
//     } catch(error){
//         res.status(error.code || 500).json({
//             res.status(error.code || 400).json({
//                 success: false,
//                 message: error.message
//             })
//         })
//     }
// }