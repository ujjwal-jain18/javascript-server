import { Request, Response, NextFunction } from 'express';
const error = [];
function checkRegex(stringtovalidate: string, regex: RegExp): boolean {
    return regex.test(stringtovalidate);
}
export default (config) => (req: Request, res: Response, next: NextFunction) => {
    console.info('======= inside validation handler ======');
   // console.log('the config is', config);
    Object.keys(config).forEach(key => {
       const checkvalidation = Object.keys(config[key]);
       const idcheck = Object.keys(req.body);
       if (checkvalidation.includes('required')) {
            if (idcheck.includes(key)) {//
            }
            else {
                if (checkvalidation.includes('custom')) {
                 error.push(config[key].custom(key)); }
                 else if (checkvalidation.includes('errorMessage')) {
                     error.push(config[key].errorMessage); }
                     else {
                         error.push('error is occured');
                     }
                 }
        }
        if (checkvalidation.includes('string')) {
           if (idcheck[key] instanceof String) {//
           }
           else {
            if (checkvalidation.includes('custom')) {
             error.push(config[key].custom(key)); }
             else if (checkvalidation.includes('errorMessage')) {
                 error.push(config[key].errorMessage); }
                 else {
                     error.push('error is occured');
                 }
             }
        }
        if (checkvalidation.includes('number')) {
            if (idcheck[key] instanceof Number) {//
            }
            else {
             if (checkvalidation.includes('custom')) {
              error.push(config[key].custom(key)); }
              else if (checkvalidation.includes('errorMessage')) {
                  error.push(config[key].errorMessage); }
                  else {
                      error.push('error is occured');
                  }
              }
        }
        if (checkvalidation.includes('isObject')) {
            if (idcheck.includes(key)) {//
            }
            else {
                if (checkvalidation.includes('custom')) {
                 error.push(config[key].custom(key)); }
                 else if (checkvalidation.includes('errorMessage')) {
                     error.push(config[key].errorMessage); }
                     else {
                         error.push('error is occured');
                     }
                 }
        }
        if (checkvalidation.includes('default')) {
            if (idcheck.includes(key)) {
                if (req.body[key] === '0' ) { //
                }
                else if(req.body[key] === '10') {//
                }
            }
            else {
                if (checkvalidation.includes('custom')) {
                 error.push(config[key].custom(key)); }
                 else if (checkvalidation.includes('errorMessage')) {
                     error.push(config[key].errorMessage); }
                     else {
                         error.push('error is occured');
                     }
                 }
        }

 } );
    };
