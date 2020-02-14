class SystemResponse {
    static success = (res: any , data: any, message: any = 'Success'): any => {
        return res.status(200).send({
            status: 'ok',
            message,
            data

        });
      }
      static error = (res: any , code: number, message: any = 'error occured'): any => {
        return res.send({
            status: code,
            message,
        });
      }
}
export default SystemResponse;