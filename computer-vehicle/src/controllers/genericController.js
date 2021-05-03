class GenericController{
    static resolve(next, promise, thenFunc, errorStatusCode = 400){
        promise
            .then(thenFunc)
            .catch(err => {
                var error = new Error(err.message);
                error.status = errorStatusCode;
                next(error);
            });
    }

};

module.exports = GenericController;