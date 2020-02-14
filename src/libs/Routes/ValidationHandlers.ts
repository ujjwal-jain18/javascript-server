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
    const errorchecker = ( validationRuleserror: any , validateKeyerror: any) => {
        if (Object.keys(validationRuleserror).includes('errorMessage')) {
            errors.push(validationRuleserror.errorMessage);
        } else if ( Object.values(validationRuleserror).includes('custom')) {
            errors.push(validationRuleserror.custom(validateKeyerror));
        } else {
            errors.push('error is occured');
        }
    };

    let requireFlag = false;
    const validator = ( validationRulescheck: any, validateKeycheck: any, data: any ) => {

        if (Object.keys(validationRulescheck).includes('required') )  {
            if (validationRulescheck.required === true) {
                requireFlag = true;
            } else if (validationRulescheck.required === false && Object.keys(data).includes(validateKeycheck) ) {
                requireFlag = true;
            }
        }
        if (requireFlag === true) {
            if (
                Object.keys(validationRulescheck).includes('string')
                && validationRulescheck.string
                && (typeof data[validateKeycheck] !== 'string')
            ) {
                errorchecker (validationRulescheck, validateKeycheck );
            }
            if (
                Object.keys(validationRulescheck).includes('number')
                && validationRulescheck.number === true
                // tslint:disable-next-line: radix
                && (isNaN( parseInt (data[validateKeycheck])))
            ) {
                errorchecker (validationRulescheck, validateKeycheck );
            }
            if (
                Object.keys(validationRulescheck).includes('isObject')
                && validationRulescheck.number === true
                && (typeof data[validateKeycheck] !== 'object')
            ) {
                    errorchecker (validationRulescheck, validateKeycheck );
                }
            if (
                Object.keys(validationRulescheck).includes('regex')
                && !checkRegex(data[validateKeycheck], validationRulescheck.regex)
            ) {
                errorchecker (validationRulescheck, validateKeycheck );
               }
        }
    };
    validationKeys.forEach(validateKey => {
        const validationRules = config[validateKey];
        if ( Object.keys(validationRules).includes('in') ) {
            if (validationRules.in.includes('body') && Object.keys(dataToValidate).includes(validateKey)) {
                validator (validationRules, validateKey, dataToValidate);
            } else if (validationRules.in.includes('params') && Object.keys(dataFromParams).includes(validateKey)) {
                validator (validationRules, validateKey, dataFromParams);
            } else if (validationRules.in.includes('query') && Object.keys(dataFromQuery).includes(validateKey)) {
                validator (validationRules, validateKey, dataFromQuery);
            } else if (validationRules === 'skip' && validationRules === 'limit' && validationRules === 'sortedBY' ) {
                        req.query = {
                            skip: '0',
                            limit: '10',
                            sortBy: 'updatedAT'
                        };
            }
        }
    });
    if (errors.length > 0) {
        res.send(errors);
    } else {
        console.log('All Validations Are Ok');
        next();
    }
};
