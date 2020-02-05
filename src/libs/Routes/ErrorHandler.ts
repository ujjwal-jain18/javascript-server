const   ErrorHandler: any = (err: any , req: any, res: any, next: any) => {
    console.log('Error', err);
    res.send({
        error: 'Not Found',
        message: 'error',
        status: 500,
        timestamp: new Date()
});
};
 export default ErrorHandler;