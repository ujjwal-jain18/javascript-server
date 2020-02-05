interface IAUTH {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
    }
    interface IPERM {
    getUsers: IAUTH;
    }
    export { IPERM, IAUTH };