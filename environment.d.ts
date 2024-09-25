declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EMAIL_SENDER: string;
            EMAIL_RECEIVER: string;
            EMAIL_PASSWORD: string;
            EMAIL_SUBJECT: string;
            EMAIL_FROM: string;
        }
    }
}

export {};