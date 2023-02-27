// export const errorHandler=(err, req, res, next)=>{
// // set our status code

// const statusCode=res.statusCode ? res.statusCode : 500;

// // if the error code above doesn't exist we want to set it to 500

// // after that we set up that status

// res.status(statusCode);

// res.json({
//     msg:err.message,
//     stack:process.env.NODE_ENV==='production' ? null : err.stack
// })

// }