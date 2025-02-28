interface Question {
    questionType : {
        type: string;
    }
    question: string;
    category : {
        category: string;
    }
    user: {
        firstname: string;
        lastname: string;
        email: string;
    }
    creationDate: Date;
    difficulty: {
        difficulty: string;
    }
}