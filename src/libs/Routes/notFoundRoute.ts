export default (req: any , res: any , next: any) => {
next({error: 'Not Found', code: '404'});
};

