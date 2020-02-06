import { Request, Response, NextFunction } from 'express';
function checkRegex(stringtovalidate: string, regex: RegExp): boolean {
    return regex.test(stringtovalidate);
}
export default (config: object) => (req: Request, res: Response, next: NextFunction): void => {

    const dataToValidate: any = req.body;
    const dataFromParams: any = req.params;
    const dataFromQuery: any = req.query;
    const errors: any = [];
    const validationKeys: any = Object.keys(config);
    validationKeys.forEach(validateKey => {
        const validationRules = config[validateKey];
        let requireFlag = false;
        const errorchecker = ( validationRuleserror: any , validateKeyerror: any) => {
            if (Object.keys(validationRuleserror).includes('errorMessage')) {
                errors.push(validationRuleserror.errorMessage);
            }
            else if ( Object.values(validationRuleserror).includes('custom')) {
                errors.push(validationRuleserror.custom(validateKeyerror));
            }
            else {
                errors.push('error is occured');
            }
            };
        const validator = ( validationRulescheck: any, validateKeycheck: any, data: any ) => {

            if (Object.keys(validationRulescheck).includes('required') )  {
                    if (validationRulescheck.required === true) {
                        requireFlag = true;
                    } else if (validationRulescheck.required === false || Object.keys(data).includes(validateKeycheck) ) {
                        requireFlag = true;
                      }
            }
            if (requireFlag === true) {
                if (Object.keys(validationRulescheck).includes('string')) {
                    if (validationRulescheck.string && typeof data[validateKeycheck] === 'string' ) {//
                    }
                    else {
                        errorchecker (validationRulescheck, validateKeycheck );
                    }
                }
                if (Object.keys(validationRulescheck).includes('number')) {
                    if (validationRulescheck.number === true && typeof data[validateKeycheck] === 'number' ) {//
                    }
                    else {
                        errorchecker (validationRulescheck, validateKeycheck );
                    }
                }
                if (Object.keys(validationRulescheck).includes('isObject')) {
                    if (validationRulescheck.number === true && data[validateKeycheck]  === true ) {//
                    }
                    else {
                        errorchecker (validationRulescheck, validateKeycheck );
                    }
                }
                if (Object.keys(validationRulescheck).includes('regex')) {
                    if (checkRegex(data[validateKeycheck], validationRulescheck.regex) ){//
                    }
                    else {
                        errorchecker (validationRulescheck, validateKeycheck );
                    }
                }
                if (Object.keys(validationRulescheck).includes('default')) {
                    if ( (validationRulescheck.default === '0' && data[validateKeycheck] === 'skip' )
                    || (validationRulescheck.default === '10' && data[validateKeycheck] === 'limit' )) {//
                    }
                    else {
                        errorchecker (validationRulescheck, validateKeycheck );
                    }
                }
            }
        };

    if (Object.keys(validationRules).includes('in')) {
        if ((validationRules.in.includes('body') && Object.keys(dataToValidate).includes(validateKey))) {
                    validator (validationRules, validateKey, dataToValidate);
        }
        else if (validationRules.in.includes('param') && Object.keys(dataFromParams).includes(validateKey)) {
                    validator (validationRules, validateKey, dataFromParams);
        }
        else if (validationRules.in.includes('query') && Object.keys(dataFromQuery).includes(validateKey)) {
                    validator (validationRules, validateKey, dataFromQuery);
        } else {
              errorchecker (validationRules, validateKey );
          }
    }
  });

  if (errors.length > 0) {
   res.send(errors);
  }
    else {
          next();
    }
};
