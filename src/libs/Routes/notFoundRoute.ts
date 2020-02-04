export default (req: any , res: any , next: any) => {
    console.log('In NF')
next({error: 'Not Found', code: '404'});
};
