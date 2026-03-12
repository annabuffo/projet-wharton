import { NOTFOUND } from "node:dns";

export class HttpError extends Error {
    constructor(message, statusCodes) {
        super(message),
            this.name = "HttpErrors",
            this.statusCodes = statusCodes;
    }
}

export class HttpForbiddenError extends HttpError {
    constructor(message = "forbidden") {
        super(message, httpStatusCodes.FORBIDDEN);
    }
}

export class HttpNotFoundError extends HttpError {
    constructor(message = "ressource not found") {
        super(message, httpStatusCodes.NOT_FOUND);
    }
}

export class HttpUnauthorizedError extends HttpError {
    constructor(message = "unauthorized") {
        super(message, httpStatusCodes.UNAUTHORIZED);
    }
}

export class HttpBadRequestError extends HttpError {
    constructor(message = "bad request") {
        super(message, httpStatusCodes.BAD_REQUEST);
    }
}

export class HttpRedirectionError extends HttpError {
    constructor(message = "redirection") {
        super(message, httpStatusCodes.REDIRECTION);
    }
}

export class HttpInternalServerError extends HttpError {
    constructor(message = " internal server error") {
        super(message, httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export class HttpConflictError extends HttpError {
    constructor(message = "Conflict") {
        super(message, httpStatusCodes.CONFLICT);
    }
} 

export const httpStatusCodes = {
    OK: 200,
    CREATED: 201,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    REDIRECTION: 302,
    INTERNAL_SERVER_ERROR: 500,
    CONFLICT: 409
}