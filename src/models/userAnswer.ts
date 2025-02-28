interface UserAnswer {
    answer: string;
    duration: number;
    user: {
        firstname: string;
        lastname: string;
        email: string;
    }
    questionAnswer: {
        answer: string;
        isCorrect: boolean;
        isCaseSensitive: boolean;
    }
    sharedLink: {
        linkUrl: string;
        name: string;
    }
    questionId: {
        question: string;
        creationDate: Date;
    }
    userCode: string;
}